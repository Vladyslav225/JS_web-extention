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