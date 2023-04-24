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

function getCompanyNameProfileLinkedInDesctopVersion() {
    const getCompanyName = document.querySelector('h1.ember-view.text-display-medium-bold.org-top-card-summary__title.full-width span').textContent;
    return getCompanyName;
};

function getURLCompanyAvatarProfileLinkedInDesctopVersion() {
    const getURLAvatarCompany = document.querySelector('div.org-top-card-primary-content__logo-container img').getAttribute('src');
    return getURLAvatarCompany
};

function getUserNameTwitterProfileDesktopVersion(callback) {
    const getParentElementName = document.querySelector('div.css-1dbjc4n.r-6gpygo.r-14gqq1x');
    if(getParentElementName) {
        const getUserName = getParentElementName.querySelector('span.css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0').textContent;
        callback(getUserName);
    }else {
        setTimeout(() => {
            getUserNameTwitterProfileDesktopVersion(callback);
        }, 1000);
    };
};