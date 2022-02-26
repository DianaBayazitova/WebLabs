// Activate selected tab in navigation bar
const href = document.location.href.split('/');
const pageName = href[href.length - 1].split('.')[0];
document.getElementById(pageName).classList.add('active');

// Get page loading time
document.getElementById('page-loading').innerHTML =
    (function onLoad() {
        const now = new Date().getTime();
        const pageLoadTime = now - performance.timing.navigationStart;
        console.log('Page loading time: ' + pageLoadTime);
        return 'Page loading time: ' + pageLoadTime / 1000 + 's';
    })();