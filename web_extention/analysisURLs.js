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

function getLinkedInCompanyProfileAvatarURL() {
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
    const elementAccountName = document.querySelector('a.x1i10hfl.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.xdl72j9.x2lah0s.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.x1hl2dhg.xggy1nq.x1ja2u2z.x1t137rt.x1q0g3np.x1lku1pv.x1a2a7pz.x6s0dn4.xjyslct.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x9f619.x1ypdohk.x1i0vuye.xwhw2v2.xl56j7k.x17ydfre.x1f6kntn.x2b8uid.xlyipyv.x87ps6o.x14atkfc.x1d5wrs8.x972fbf.xcfux6l.x1qhh985.xm0m39n.xm3z3ea.x1x8b98j.x131883w.x16mih1h.xt7dq6l.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1n2onr6.xjbqb8w.x1n5bzlp.xqnirrm.xj34u2y.x568u83.x3nfvp2');
    if(elementAccountName){
        var getAccountName = elementAccountName.textContent;
        callback(getAccountName);
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