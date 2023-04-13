function displayResult() {
    const youTubeVideoPageMobileVersion = 'https://m.youtube.com/watch?v=';
    const youTubeVideoPageDesktopVersion = 'https://www.youtube.com/watch?v=';
    const pageGooglePlayApp = 'https://play.google.com/store/apps/details?id=';
    const pageAppleStoreAppDesktopVersion = 'https://apps.apple.com/us/app/';
    const instagramAccountPage = 'https://www.instagram.com/';

    if(window.location.href.includes(youTubeVideoPageMobileVersion)) {
        getYouTubeChanelMobileVersion((channelName) => {
            console.log(channelName);
        });
    };

    if(window.location.href.includes(youTubeVideoPageDesktopVersion)) {
        getYouTubeChanelDesktopVersion((channelName) => {
            console.log(channelName);
        });
    };

    if(window.location.href.includes(pageGooglePlayApp)) {
        getGooglePlayPublisher((publisherId) => {
            console.log(publisherId);
        });
    };

    if(window.location.href.includes(pageAppleStoreAppDesktopVersion)) {
        getAppleStorePublisher((channelName) => {
            console.log(channelName);
        });
    };

    if(window.location.href.includes(instagramAccountPage)) {
        getInstagramAccountName(instagramAccountPage, (accountName) => {
            console.log(accountName);
        });
    };
};

function getYouTubeChanelMobileVersion(callback) {
    const getParentElement = document.getElementsByClassName('slim-owner-icon-and-title')
    if(getParentElement) {
        for(i of getParentElement) {
            const getChannelName = i.getAttribute('href').replace('/', '')
            callback(getChannelName);
        };
    }else {
        setTimeout(() => {
            getYouTubeChanelMobileVersion(callback);
        }, 1000);
    }
};

function getYouTubeChanelDesktopVersion(callback) {
    const getParentLinkElement = document.querySelector('yt-formatted-string.style-scope.ytd-channel-name.complex-string');
    if(getParentLinkElement) {
        const getChannelName = getParentLinkElement.querySelector('a.yt-simple-endpoint.style-scope.yt-formatted-string').getAttribute('href').replace('/', '');
        callback(getChannelName);
    }else {
        setTimeout(() => {
            getYouTubeChanelDesktopVersion(callback);
        }, 1000);
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

function getAppleStorePublisher(callback){
    const getPublisherName = document.querySelector('h2.product-header__identity.app-header__identity a').textContent.trim();
    callback(getPublisherName)
};

function getInstagramAccountName(homePageURL, callback){
    if(window.location.href != homePageURL){
        const elementAccountName = document.querySelector('h2.x1lliihq.x1plvlek.xryxfnj.x1n2onr6.x193iq5w.xeuugli.x1fj9vlw.x13faqbe.x1vvkbs.x1s928wv.xhkezso.x1gmr53x.x1cpjm7i.x1fgarty.x1943h6x.x1i0vuye.x1ms8i2q.xo1l8bm.x5n08af.x10wh9bi.x1wdrske.x8viiok.x18hxmgj');
        if(elementAccountName){
            var getAccountName = elementAccountName.textContent;
            callback(getAccountName);
        }else {
            setTimeout(() => {
                getInstagramAccountName(homePageURL, callback);
            }, 1000);
        };
    }
};

displayResult();