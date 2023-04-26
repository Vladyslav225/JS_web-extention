function getYouTubeChanelId(callback) {
    const parentElementIdDesktopVersion = document.querySelector('yt-formatted-string.style-scope.ytd-channel-name.complex-string');
    const channelIdElementMobileVersion = document.querySelector('a.slim-owner-icon-and-title');

    if(parentElementIdDesktopVersion) {
        const getChannelName = parentElementIdDesktopVersion.querySelector('a.yt-simple-endpoint.style-scope.yt-formatted-string').getAttribute('href').replace('/', '');

        callback(getChannelName);
    }else if(channelIdElementMobileVersion) {
        const getChannelName = channelIdElementMobileVersion.getAttribute('href').replace('/', '');

        callback(getChannelName);
    }else {
        setTimeout(() => {
            getYouTubeChanelId(callback);
        }, 1000);
    };
};

function getLinkedInCompanyNameProfile() {
    const elementNameDesktopVersion = document.querySelector('h1.ember-view.text-display-medium-bold.org-top-card-summary__title.full-width span');
    const elementNameMobileVersion = document.querySelector('span#company-name');

    if(elementNameDesktopVersion) {
        return elementNameDesktopVersion.textContent;
    }else if(elementNameMobileVersion) {
        return elementNameMobileVersion.textContent;
    };
};

function getLinkedInCompanyAvatarProfileURL() {
    const elementURLDesktopVersion = document.querySelector('div.org-top-card-primary-content__logo-container img');
    const elementURLMobileVersion = document.querySelector('img.company-entity-large');

    if(elementURLDesktopVersion) {
        return elementURLDesktopVersion.getAttribute('src');
    }else if(elementURLMobileVersion) {
        return elementURLMobileVersion.getAttribute('data-delayed-url');
    };
};

function getLinkedInDeveloperNameProfile() {
    const elementNameDesktopVersion = document.querySelector('h1.text-heading-xlarge.inline.t-24.v-align-middle.break-words');
    const elementNameMobileVersion = document.querySelector('h1.text-color-text.heading-large');

    if(elementNameDesktopVersion) {
        return elementNameDesktopVersion.textContent;
    };

    if(elementNameMobileVersion) {
        return elementNameMobileVersion.textContent;
    };
};

function getLinkedInDeveloperAvatarURLProfile() {
    const elementURLDesktopVersion = document.querySelector('img.pv-top-card-profile-picture__image.pv-top-card-profile-picture__image--show.ember-view');
    const elementURLMobileVersion = document.querySelector('figure#profile-picture-container img');

    if(elementURLDesktopVersion) {
        return elementURLDesktopVersion.getAttribute('src');
    };

    if(elementURLMobileVersion) {
        return elementURLMobileVersion.getAttribute('data-delayed-url');
    };
};

function getInstagramAccountName(callback) {
    const getVideoHeaderElement = document.querySelector('header._aaqw');

    if(getVideoHeaderElement){
        const elementWithOneAccountName = getVideoHeaderElement.querySelector('div._aaqt');
        const elementWithTwoAccountNames = getVideoHeaderElement.querySelector('div._aaqt._aaqu');

        if(elementWithOneAccountName) {
            const getAccountName = elementWithOneAccountName.querySelector('a').textContent
            callback(getAccountName);
        };

        if(elementWithTwoAccountNames) {
            const getElementAccountName = elementWithTwoAccountNames.querySelectorAll('a');

            for(index of getElementAccountName) {
                callback(index.textContent);
            }
        };
    }else {
        setTimeout(() => {
            getInstagramAccountName(callback);
        }, 1000);
    };
};

function getTwitterProfileUserName(callback) {
    const parentElementNameDesktopVersion = document.querySelector('div.css-1dbjc4n.r-6gpygo.r-14gqq1x');
    const parentElementNameMobileVersion = document.querySelector('div.css-1dbjc4n.r-1a8r3js.r-14gqq1x');


    if(parentElementNameDesktopVersion) {
        const getUserName = parentElementNameDesktopVersion.querySelector('span.css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0').textContent;

        callback(getUserName);
    }else if(parentElementNameMobileVersion){
        const getUserName = parentElementNameMobileVersion.querySelector('span.css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0').textContent;

        callback(getUserName);
    }else {
        setTimeout(() => {
            getTwitterProfileUserName(callback);
        }, 1000);
    };
};

function getTwitterProfileUserAvatarURL(callback) {
    const getParentElementAvatar = document.querySelector('div.css-1dbjc4n.r-1habvwh.r-18u37iz.r-1w6e6rj.r-1wtj0ep');

    if(getParentElementAvatar) {
        const getURLAvatar = getParentElementAvatar.querySelector('img.css-9pa8cd').src;

        callback(getURLAvatar);
    }else {
        setTimeout(() => {
            getTwitterProfileUserAvatarURL(callback);
        }, 1000);
    };
};

function getGooglePlayPublisherId(callback) {
    const getParentElementPublisherId = document.querySelector('div.dzkqwc c-wiz');

    if(getParentElementPublisherId) {
        const getLinkWithPublisherId = getParentElementPublisherId.querySelector('a').getAttribute('href');

        callback(getLinkWithPublisherId);
    }else {
        setTimeout(() => {
            getGooglePlayPublisherId(callback);
        }, 1000);
    };
};

function getAppleStorePublisherLink(){
    const getLinkWithPublisherId = document.querySelector('h2.product-header__identity.app-header__identity a').getAttribute('href');

    return getLinkWithPublisherId
};