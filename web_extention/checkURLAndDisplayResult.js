function checkURLAndDisplayResult() {
    if(window.location.href.includes(window.desktopVersionURLs.youTubeVideoPage) || window.location.href.includes(window.mobileVersionURLs.youTubeVideoPage)) {
        getYouTubeChanelId((channelName) => {
            console.log(channelName);
        });
    };

    if(window.location.href.includes(window.desktopVersionURLs.companyProfileLinkedIn) || window.location.href.includes(window.mobileVersionURLs.companyProfileLinkedIn)) {
        const companyName = getLinkedInCompanyNameProfile();
        const urlCompanyAvatar = getLinkedInCompanyProfileAvatarURL();
        console.log(companyName);
        console.log(urlCompanyAvatar);
    };

    if(window.location.href.includes(window.generalURLs.developerProfileLinkedIn)) {
        const developerName = getLinkedInDeveloperNameProfile();
        const urlDeveloperAvatar = getLinkedInDeveloperAvatarURLProfile();
        console.log(developerName);
        console.log(urlDeveloperAvatar);
    };

    if(window.location.href.includes(window.generalURLs.instagramAccountPage)) {
        getInstagramAccountName((accountName) => {
            console.log(accountName);
        });
    };

    if(window.location.href.includes(window.generalURLs.homePageTwitter)) {
        getTwitterProfileUserName((userName) => {
            console.log(userName);
        });

        getUserAvatarTwitterProfile((urlAvatar) => {
            console.log(urlAvatar);
        });
    };
};

result()