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

//Create table from form
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const weekLength = document.getElementById('weekLength').value;
    const classesNumber = document.getElementById('classesNumber').value;
    const language = document.querySelector('input[name="language"]:checked').value;

    const body = document.body;
    const oldTable = document.getElementById('table');
    if (!!oldTable) {
        oldTable.remove();
    }
    const tbl = document.createElement('table');
    tbl.id = 'table';
    tbl.style.border = '1px solid black';
    tbl.style.marginLeft = 'auto';
    tbl.style.marginRight = 'auto';

    body.appendChild(tbl);
    if (weekLength === 'five') {
        createTable(classesNumber, 5, language);
    } else if (weekLength === 'six') {
        createTable(classesNumber, 6, language);
    } else {
        console.warn('Unknown week length ' + weekLength);
    }
})

const createTable = (classesNumber, days, language) =>  {
    const tbl = document.getElementById('table');
    const dayOfWeekRus = {
        0: 'Понедельник',
        1: 'Вторник',
        2: 'Среда',
        3: 'Четверг',
        4: 'Пятница',
        5: 'Суббота'
    };
    const dayOfWeekEng = {
        0: 'Monday',
        1: 'Tuesday',
        2: 'Wednesday',
        3: 'Thursday',
        4: 'Friday',
        5: 'Saturday'
    };
    for (let i = 0; i < parseInt(classesNumber) + 1; i++) {
        const tr = tbl.insertRow();
        for (let j = 0; j < days; j++) {
            const td = tr.insertCell();
            if (i === 0) {
                if (language === 'Russian') {
                    td.appendChild(document.createTextNode(`${dayOfWeekRus[j]}`));
                } else if (language === 'English') {
                    td.appendChild(document.createTextNode(`${dayOfWeekEng[j]}`));
                }
            }
            td.style.border = '1px solid black';
            td.style.height = '30px';
        }
    }
}