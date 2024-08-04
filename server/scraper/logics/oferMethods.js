const puppeteer = require('puppeteer');

const oferHebToEng = {
    'קניון עופר נהריה': 'nahariya-mall',
    'עופר גרנד קניון חיפה':'grand-kenyon-haifa',
    'קניון עופר לב חדרה':'lev-hadera',
    'עופר הקריון':'kiryon-kiryat-bialik',
    'עופר סנטר נוף הגליל':'ofer-center',
    'חוצות המפרץ אאוטלט':'huzot',
    'עופר הקניון הגדול':'grand-mall-petah-tikva',
    'קניון עופר רחובות':'rehovot-mall',
    'עופר בילו סנטר אאוטלט':'bilu-center-outlet',
    'קניון עופר הגבעה':'ha-givaa',
    'קניון עופר סירקין':'sirkin',
    'קניון עופר רמת אביב':'ramat-aviv',
    'קניון עופר השרון':'hasharon',
    'קניון עופר מרום':'marom',
    'עופר קניותר':'kenyoter',
    'קניון עופר הראל':'harel',
    'עופר גרנד קניון ב"ש':'beer-sheva',
    'קניון עופר אדומים':'maale-adomim'
  };

async function scrapeOferMallList(page, scrapeInstructions, mallsGroupUrl) {
    await page.waitForSelector(scrapeInstructions.mallList);
    const malls = await page.evaluate((scrapeInstructions, oferHebToEng, mallsGroupUrl) => {
        const mallElements = document.querySelectorAll(scrapeInstructions.mall);
        const mallList = [];
        mallElements.forEach(mall => {
            const hebrewName = mall.querySelector(scrapeInstructions.mallFields.name)?.innerText.trim();
            const name = oferHebToEng[hebrewName];
            const link = mallsGroupUrl + "/" + name + "/info";
            const storesLink = mallsGroupUrl + "/" + name + "/stores";
            mallList.push({ name, link, storesLink });
        });
        return mallList;
    }, scrapeInstructions, oferHebToEng, mallsGroupUrl);

    for (let mall of malls) {
        try {
            await page.goto(mall.link, { waitUntil: 'networkidle2' });
            const mallInfo = await page.evaluate((scrapeInstructions) => {
                const addressElement = document.querySelector(scrapeInstructions.mallFields.address);
                const address = addressElement ? addressElement.innerText.trim() : 'No address found';

                const hoursElements = document.querySelectorAll(scrapeInstructions.mallFields.hours);
                const hours = Array.from(hoursElements).map(element => element.innerText.trim());

                return { address, hours };
            }, scrapeInstructions);
            mall.address = mallInfo.address;
            mall.hours = mallInfo.hours;
        } catch (mallError) {
            console.error(`Error scraping mall for ${mall.name}`, mallError);
        }
    }

    return malls;
}


async function scrapeOferStores(page, mall, scrapeInstructions) {
    try {
        await page.goto(mall.storesLink, { waitUntil: 'networkidle2' });
        const stores = await page.evaluate((scrapeInstructions) => {
            const storeElements = document.querySelectorAll(scrapeInstructions.mallFields.storesFields.storeElement);
            const storeList = [];
            storeElements.forEach(store => {
                const linkElement = store.closest('a');
                const link = linkElement ? linkElement.href : '';
                const name = store.querySelector(scrapeInstructions.mallFields.storesFields.name)?.innerText.trim() || '';
                const hours = store.querySelector(scrapeInstructions.mallFields.storesFields.hours)?.innerText.trim() || '';
                const floor = store.querySelector(scrapeInstructions.mallFields.storesFields.floor)?.innerText.trim() || '';
                const logoElement = store.querySelector(scrapeInstructions.mallFields.storesFields.logo);
                const logo = logoElement ? logoElement.src : '';
                
                storeList.push({ link, name, hours, floor, logo });
            });
            return storeList;
        }, scrapeInstructions);
        mall.stores = stores;
    } catch (error) {
        console.error(`Error scraping stores for ${mall.title}`, error);
    }
}


module.exports = {
    scrapeOferMallList,
    scrapeOferStores
};
