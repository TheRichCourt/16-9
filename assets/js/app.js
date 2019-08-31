require('../sass/responsive_embed.scss');

document.addEventListener('DOMContentLoaded', function () {
    const defaultConfig = {
        srcExpressions: [
            /https:\/\/www.youtube.com/,
            /https:\/\/player.vimeo.com/,
        ]
    }

    let elems = document.querySelectorAll('iframe');

    [].forEach.call(elems, function (elem) {
        defaultConfig.srcExpressions.forEach(function (expression) {
            if (expression.test(elem.src)) {
                let container = document.createElement('div');

                container.classList.add('video-wrapper');

                elem.parentNode.insertBefore(container, elem);

                container.appendChild(elem);
            }
        });
    });
}, false);
