function getBlockChannelName(selector, callback) {
    const getParentLinkElement = document.querySelector(selector);
    if (getParentLinkElement) {
        var getLinkElement = getParentLinkElement.querySelector('a.yt-simple-endpoint.style-scope.yt-formatted-string');
        var getAttributeHref = getLinkElement.getAttribute('href').replace('/', '');
        callback(getAttributeHref);
    } else {
        setTimeout(() => {
            getBlockChannelName(selector, callback);
        }, 100);
    };
}

function getChannelName(){
    if(/watch\?v=/.test(window.location.href)){
        getBlockChannelName('yt-formatted-string.style-scope.ytd-channel-name.complex-string', (channelName) => {
            console.log(channelName);
        });
    }
}

getChannelName()