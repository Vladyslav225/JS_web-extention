window.addEventListener('load', () => {
    const nodeList = document.querySelectorAll('.yt-simple-endpoint');

    for (index of nodeList) {
        var attributeHref = index.getAttribute('href')

        if (attributeHref) {
            if (attributeHref.length > 1 && attributeHref[1] === '@'){
                console.log(attributeHref.replace('/', ''));
            };
        };
    };
});