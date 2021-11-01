/* eslint-disable no-console */

// eslint-disable-next-line func-names
(function () {
    function injectScript(src) {
        const script = document.createElement('script');

        script.src = src;

        document.head.appendChild(script);
    }

    const src = '../dist/most-visible.js';
    console.log('');
    console.log(`Using ${src}`);
    injectScript(src);

    // Inject tests
    ['global-attached', 'jquery', 'fn-call', 'selector', 'correct-element', 'correct-element-percentage'].forEach((value) => {
        injectScript(`unit/${value}.js`);
    });
})();
