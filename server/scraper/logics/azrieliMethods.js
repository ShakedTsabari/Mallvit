const puppeteer = require('puppeteer');

async function scrapeAzrieliMallList(page, scrapeInstructions) {
    await page.waitForSelector(scrapeInstructions.mallList);
    const malls = await page.evaluate((scrapeInstructions) => {
        const mallElements = document.querySelectorAll(scrapeInstructions.mall);
        const mallList = [];
        mallElements.forEach(mall => {
            const name = mall.querySelector(scrapeInstructions.mallFields.name)?.innerText.trim();
            const title = mall.querySelector(scrapeInstructions.mallFields.title)?.innerText.trim();
            const address = mall.querySelector(scrapeInstructions.mallFields.address)?.innerText.trim();
            const hoursElements = mall.querySelectorAll(scrapeInstructions.mallFields.hours);
            const hours = Array.from(hoursElements).map(element => element.innerText.trim());
            const link = mall.querySelector(scrapeInstructions.mallFields.mallPageLink)?.href;
            mallList.push({ name, title, address, hours, link });
        });
        return mallList;
    }, scrapeInstructions);

    // Scrape the link to all stores
    for (let mall of malls) {
        try {
            await page.goto(mall.link, { waitUntil: 'networkidle2' });
            await page.waitForSelector('.inner-wrapper');
            const storesLink = await page.evaluate((scrapeInstructions) => {
                const storeLinkElement = document.querySelector(scrapeInstructions.mallFields.storesLink);
                return storeLinkElement ? storeLinkElement.href : null;
            }, scrapeInstructions);
            mall.storesLink = storesLink;
        } catch (mallError) {
            console.error(`Error scraping store link for ${mall.name}`, mallError);
        }
    }

    return malls;
}

async function scrapeAzrieliStores(page, mall, scrapeInstructions, imageHashMap) {
    try {
        await page.goto(mall.storesLink, { waitUntil: 'networkidle2' });
        const stores = await page.evaluate((scrapeInstructions) => {
            const storeElements = document.querySelectorAll(scrapeInstructions.mallFields.storesFields.storeElement);
            const storeList = [];
            storeElements.forEach(store => {
                const name = store.querySelector(scrapeInstructions.mallFields.storesFields.name)?.innerText.trim();
                const floor = store.querySelector(scrapeInstructions.mallFields.storesFields.floor)?.innerText.trim();
                const phoneNumber = store.querySelector(scrapeInstructions.mallFields.storesFields.phoneNumber)?.innerText.trim();
                const link = store.querySelector(scrapeInstructions.mallFields.storesFields.link)?.href || '';
                storeList.push({ name, floor, phoneNumber, link });
            });
            return storeList;
        }, scrapeInstructions);

        for (let store of stores) {
            let img = "";
            if (imageHashMap[store.name]) {
                img = imageHashMap[store.name];
            } else if (store.link) {
                try {
                    await page.goto(store.link, { waitUntil: 'networkidle2' });
                    await page.waitForSelector(scrapeInstructions.mallFields.storesFields.image);
                    img = await page.evaluate((scrapeInstructions) => {
                        const imgElement = document.querySelector(scrapeInstructions.mallFields.storesFields.image);
                        return imgElement ? imgElement.src : '';
                    }, scrapeInstructions);
                } catch (error) {
                    console.log(`Error fetching image for store: ${store.name}`, error);
                }
            }
            store.img = img;
        }
        mall.stores = stores;
    } catch (error) {
        console.error(`Error scraping stores for ${mall.title}`, error);
    }
}

module.exports = {
    scrapeAzrieliMallList,
    scrapeAzrieliStores
};
