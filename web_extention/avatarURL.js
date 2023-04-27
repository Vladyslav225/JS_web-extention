function getLinkedInCompanyAvatarProfileURL() {
    const elementURLDesktopVersion = document.querySelector('div.org-top-card-primary-content__logo-container img');
    const elementURLMobileVersion = document.querySelector('img.company-entity-large');

    if(elementURLDesktopVersion) {
        return elementURLDesktopVersion.getAttribute('src');
    }else if(elementURLMobileVersion) {
        return elementURLMobileVersion.getAttribute('data-delayed-url');
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

function getLinkedInCompanyAvatarProfileURL() {
    const elementURLDesktopVersion = document.querySelector('div.org-top-card-primary-content__logo-container img');
    const elementURLMobileVersion = document.querySelector('img.company-entity-large');

    if(elementURLDesktopVersion) {
        return elementURLDesktopVersion.getAttribute('src');
    }else if(elementURLMobileVersion) {
        return elementURLMobileVersion.getAttribute('data-delayed-url');
    };
};