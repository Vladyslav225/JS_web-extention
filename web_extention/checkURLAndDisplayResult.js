function checkURLAndDisplayResult() {
    if(window.location.href.includes(Urls.desktopVersionURLs.youTubeVideoPage) || window.location.href.includes(Urls.mobileVersionURLs.youTubeVideoPage)) {
        getYouTubeChanelId((channelName) => {
            console.log(channelName);
        });
    };

    if(window.location.href.includes(Urls.desktopVersionURLs.companyProfileLinkedIn) || window.location.href.includes(Urls.mobileVersionURLs.companyProfileLinkedIn)) {
        const companyName = getLinkedInCompanyNameProfile();
        const urlCompanyAvatar = getLinkedInCompanyAvatarProfileURL();
        console.log(companyName);
        console.log(urlCompanyAvatar);
    };

    if(window.location.href.includes(Urls.allVersions.developerProfileLinkedIn)) {
        const developerName = getLinkedInDeveloperNameProfile();
        const urlDeveloperAvatar = getLinkedInDeveloperAvatarURLProfile();
        console.log(developerName);
        console.log(urlDeveloperAvatar);
    };

    if(window.location.href.includes(Urls.allVersions.instagramAccountPage)) {
        getInstagramAccountName((accountName) => {
            console.log(accountName);
        });
    };

    if(window.location.href.includes(Urls.allVersions.homePageTwitter)) {
        getTwitterProfileUserName((userName) => {
            console.log(userName);
        });

        getTwitterProfileUserAvatarURL((urlAvatar) => {
            console.log(urlAvatar);
        });
    };

    if(window.location.href.includes(Urls.allVersions.googlePlayAppPage)) {
        getGooglePlayPublisherId((publisherId) => {
            console.log(publisherId);
        });
    };

    if(window.location.href.includes(Urls.desktopVersionURLs.appleStoreAppPage)) {
        console.log('123')
        const publisherLink = getAppleStorePublisherLink();
        console.log(publisherLink);
    };
};

checkURLAndDisplayResult()