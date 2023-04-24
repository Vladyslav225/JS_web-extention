function getYouTubeChanelMobileVersion(callback) {
    const getParentElement = document.querySelector('a.slim-owner-icon-and-title')
    if(getParentElement) {
        const getChannelName = getParentElement.getAttribute('href').replace('/', '')
        callback(getChannelName);
    }else {
        setTimeout(() => {
            getYouTubeChanelMobileVersion(callback);
        }, 1000);
    }
};

function getCompanyNameProfileLinkedInMobileVersion() {
    const getCompanyName = document.querySelector('span#company-name').textContent;
    return getCompanyName;
};

function getURLCompanyAvatarProfileLinkedInMobileVersion() {
    const getCompanyAvatar = document.querySelector('img.company-entity-large').getAttribute('data-delayed-url');
    return getCompanyAvatar;
};

function getUserNameTwitterProfileMobileVersion(callback) {
    const getParentElementName = document.querySelector('div.css-1dbjc4n.r-1a8r3js.r-14gqq1x');
    if(getParentElementName) {
        const getUserName = getParentElementName.querySelector('span.css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0').textContent;
        callback(getUserName);
    }else {
        setTimeout(() => {
            getUserNameTwitterProfileMobileVersion(callback);
        }, 1000);
    };
};