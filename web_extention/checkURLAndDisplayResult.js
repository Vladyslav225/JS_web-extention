function checkURLAndDisplayResult() {
    if(window.location.href.includes(window.desktopVersionURLs.youTubeVideoPage) || window.location.href.includes(window.mobileVersionURLs.youTubeVideoPage)) {
        getYouTubeChanelId((channelName) => {
            console.log(channelName);
        });
    };

    if(window.location.href.includes(window.desktopVersionURLs.companyProfileLinkedIn) || window.location.href.includes(window.mobileVersionURLs.companyProfileLinkedIn)) {
        const companyName = getLinkedInCompanyNameProfile();
        const urlCompanyAvatar = getLinkedInCompanyAvatarProfileURL();
        console.log(companyName);
        console.log(urlCompanyAvatar);
    };

    if(window.location.href.includes(window.urlsForAllVersionsSite.developerProfileLinkedIn)) {
        const developerName = getLinkedInDeveloperNameProfile();
        const urlDeveloperAvatar = getLinkedInDeveloperAvatarURLProfile();
        console.log(developerName);
        console.log(urlDeveloperAvatar);
    };

    if(window.location.href.includes(window.urlsForAllVersionsSite.instagramAccountPage)) {
        getInstagramAccountName((accountName) => {
            console.log(accountName);
        });
    };

    if(window.location.href.includes(window.urlsForAllVersionsSite.homePageTwitter)) {
        getTwitterProfileUserName((userName) => {
            console.log(userName);
        });

        getTwitterProfileUserAvatarURL((urlAvatar) => {
            console.log(urlAvatar);
        });
    };

    if(window.location.href.includes(window.urlsForAllVersionsSite.googlePlayAppPage)) {
        getGooglePlayPublisherId((publisherId) => {
            console.log(publisherId);
        });
    };

    if(window.location.href.includes(window.desktopVersionURLs.appleStoreAppPage)) {
        const publisherLink = getAppleStorePublisherLink();
        console.log(publisherLink);
    };
};

checkURLAndDisplayResult()