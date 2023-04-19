function displayResult() {
    const youTubeVideoPageMobileVersion = 'https://m.youtube.com/watch?v=';
    const youTubeVideoPageDesktopVersion = 'https://www.youtube.com/watch?v=';

    const pageGooglePlayApp = 'https://play.google.com/store/apps/details?id=';

    const pageAppleStoreAppDesktopVersion = 'https://apps.apple.com/us/app/';

    const instagramAccount = 'https://www.instagram.com/p/';

    const linkedIdCompanyProfilePage = 'https://www.linkedin.com/company/';
    const linkedIdDeveloperProfilePage = 'https://www.linkedin.com/in/';

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

    if(window.location.href.includes(linkedIdCompanyProfilePage)) {
        const companyName = getLinkedIdCompanyProfilePage();
        console.log(companyName)
    };

    if(window.location.href.includes(linkedIdDeveloperProfilePage)) {
        const developerName = getLinkedIdDeveloperProfilePage();
        console.log(developerName);
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

function getLinkedIdCompanyProfilePage() {
    const getParentElementCompanyName = document.querySelector('h1.ember-view.text-display-medium-bold.org-top-card-summary__title.full-width span').textContent;
    return getParentElementCompanyName;
};

function getLinkedIdDeveloperProfilePage() {
    const getElementUserName = document.querySelector('h1.text-heading-xlarge.inline.t-24.v-align-middle.break-words').textContent;
    return getElementUserName;
};

displayResult();