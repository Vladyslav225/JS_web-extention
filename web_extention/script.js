function displayResult() {
    const desktopYouTubeVideoPage = 'https://www.youtube.com/watch?v=';
    const mobileYouTubeeVideoPage = 'https://m.youtube.com/watch?v='
    const pageGooglePlayApp = 'https://play.google.com/store/apps/details?id=';

    if(window.location.href.includes(desktopYouTubeVideoPage) || window.location.href.includes(mobileYouTubeeVideoPage)) {
        getYouTubeChanelName((channelName) => {
            console.log(channelName)
        });
    };
    if(window.location.href.includes(pageGooglePlayApp)) {
        getGooglePlayPublisher((publisherId) => {
            console.log(publisherId)
        });
    };
};

function getYouTubeChanelName(callback) {
    if(window.innerWidth <= 768){
        const getParentElement = document.getElementsByClassName('slim-owner-icon-and-title')
        if(getParentElement) {
            for(i of getParentElement) {
                const getChannelName = i.getAttribute('href').replace('/', '')
                callback(getChannelName);
            };
        }else {
            setTimeout(() => {
                getYouTubeChanelName(callback);
            }, 1000);
        }
    }else {
        const getParentLinkElement = document.querySelector('yt-formatted-string.style-scope.ytd-channel-name.complex-string');
        if(getParentLinkElement) {
            const getChannelName = getParentLinkElement.querySelector('a.yt-simple-endpoint.style-scope.yt-formatted-string').getAttribute('href').replace('/', '');
            callback(getChannelName);
        }else {
            setTimeout(() => {
                getYouTubeChanelName(callback);
            }, 1000);
        }
    }
};

function getGooglePlayPublisher(callback) {
    const getParentPublisherElement = document.querySelector('div.dzkqwc c-wiz')
    if(getParentPublisherElement) {
        const attributWithIdPublisher = getParentPublisherElement.getAttribute('data-p');
        var firstIndexQuots = attributWithIdPublisher.indexOf('"');
        var secondIndexQuots = attributWithIdPublisher.lastIndexOf('"');
        var getPublisherName = attributWithIdPublisher.substring(firstIndexQuots+1, secondIndexQuots);
        callback(getPublisherName);
    }else {
        setTimeout(() => {
            getGooglePlayPublisher(callback);
        }, 1000);
    }
};

displayResult();