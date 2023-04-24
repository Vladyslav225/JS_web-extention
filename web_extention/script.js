function displayResult() {
    const youTubeVideoPageMobileVersion = 'https://m.youtube.com/watch?v=';
    const youTubeVideoPageDesktopVersion = 'https://www.youtube.com/watch?v=';

    const pageGooglePlayApp = 'https://play.google.com/store/apps/details?id=';

    const pageAppleStoreAppDesktopVersion = 'https://apps.apple.com/us/app/';

    const instagramAccount = 'https://www.instagram.com/p/';

    const companyProfilePageLinkedInDesktopVersion = 'https://www.linkedin.com/company/';
    const companyProfilePageLinkedInMobileVersion = 'https://www.linkedin.com/mwlite/company/';

    const developerProfilePageLinkedIn = 'https://www.linkedin.com/in/';

    const twitterURL = 'https://twitter.com/';

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

    if(window.location.href.includes(instagramAccount)) {
        getInstagramAccountName(instagramAccount, (accountName) => {
            console.log(accountName);
        });
    };

    if(window.location.href.includes(companyProfilePageLinkedInDesktopVersion)) {
        const companyName = getCompanyNameProfileLinkedInDesctopVersion();
        const urlCompanyAvatar = getURLCompanyAvatarProfileLinkedInDesctopVersion();
        console.log(companyName);
        console.log(urlCompanyAvatar);
    };

    if(window.location.href.includes(companyProfilePageLinkedInMobileVersion)) {
        const companyName = getCompanyNameProfileLinkedInMobileVersion();
        const urlCompanyAvatar = getURLCompanyAvatarProfileLinkedInMobileVersion();
        console.log(companyName);
        console.log(urlCompanyAvatar);
    };

    if(window.location.href.includes(developerProfilePageLinkedIn)) {
        const developerName = getDeveloperNameProfileLinkedIn();
        const urlDeveloperAvatar = getDeveloperAvatarProfileLinkedIn();
        console.log(developerName);
        console.log(urlDeveloperAvatar);
    };

    if(window.location.href.includes(twitterURL)) {
        getUserNameTwitterProfileDesktopVersion((userName) => {
            console.log(userName);
        });

        getUserNameTwitterProfileMobileVersion((userName) => {
            console.log(userName);
        });

        getUserAvatarTwitterProfile((urlAvatar) => {
            console.log(urlAvatar);
        });
    };
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

function getInstagramAccountName(homePageURL, callback) {
    const elementAccountName = document.querySelector('a.x1i10hfl.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.xdl72j9.x2lah0s.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.x1hl2dhg.xggy1nq.x1ja2u2z.x1t137rt.x1q0g3np.x1lku1pv.x1a2a7pz.x6s0dn4.xjyslct.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x9f619.x1ypdohk.x1i0vuye.xwhw2v2.xl56j7k.x17ydfre.x1f6kntn.x2b8uid.xlyipyv.x87ps6o.x14atkfc.x1d5wrs8.x972fbf.xcfux6l.x1qhh985.xm0m39n.xm3z3ea.x1x8b98j.x131883w.x16mih1h.xt7dq6l.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1n2onr6.xjbqb8w.x1n5bzlp.xqnirrm.xj34u2y.x568u83.x3nfvp2');
    if(elementAccountName){
        var getAccountName = elementAccountName.textContent;
        callback(getAccountName);
    }else {
        setTimeout(() => {
            getInstagramAccountName(homePageURL, callback);
        }, 1000);
    };
};

function getAppleStorePublisher(callback){
    const getPublisherName = document.querySelector('h2.product-header__identity.app-header__identity a').textContent.trim();
    callback(getPublisherName)
};

function getDeveloperNameProfileLinkedIn() {
    const getDeveloperNameDesktopVersion = document.querySelector('h1.text-heading-xlarge.inline.t-24.v-align-middle.break-words');
    const getDeveloperNameMobileVersion = document.querySelector('h1.text-color-text.heading-large');

    if(getDeveloperNameDesktopVersion) {
        return getDeveloperNameDesktopVersion.textContent;
    };
    if(getDeveloperNameMobileVersion) {
        return getDeveloperNameMobileVersion.textContent;
    };
};

function getDeveloperAvatarProfileLinkedIn() {
    const getDeveloperAvatarDesktopVersion = document.querySelector('img.pv-top-card-profile-picture__image.pv-top-card-profile-picture__image--show.ember-view');
    const getDeveloperAvatarMobileVersion = document.querySelector('figure#profile-picture-container img');

    if(getDeveloperAvatarDesktopVersion) {
        return getDeveloperAvatarDesktopVersion.getAttribute('src');
    };
    if(getDeveloperAvatarMobileVersion) {
        return getDeveloperAvatarMobileVersion.getAttribute('data-delayed-url');
    };
};

function getUserAvatarTwitterProfile(callback) {
    const getParentElementAvatar = document.querySelector('div.css-1dbjc4n.r-1habvwh.r-18u37iz.r-1w6e6rj.r-1wtj0ep')

    if(getParentElementAvatar) {
        const getURLAvatar = getParentElementAvatar.querySelector('img.css-9pa8cd').src;
        callback(getURLAvatar);
    }else {
        setTimeout(() => {
            getUserAvatarTwitterProfile(callback);
        }, 1000);
    };
};

displayResult();