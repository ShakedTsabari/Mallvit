const puppeteer = require('puppeteer');
const fs = require('fs');  // Add this line to import the File System module


async function scrapeMalls() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    // await page.goto('https://www.azrielimalls.co.il/%D7%A7%D7%A0%D7%99%D7%95%D7%A0%D7%99%D7%9D', { waitUntil: 'networkidle2' });

    // await page.waitForSelector('.mall-boxes-wrapper');

    // const malls = await page.evaluate(() => {
    //     const mallElements = document.querySelectorAll('.mall-boxes-wrapper .mall-box');
    //     const mallList = [];
    //     mallElements.forEach(mall => {
    //         const name = mall.querySelector('.mall-box-title .mall-title-text').innerText.trim();
    //         const title = mall.querySelector('.mall-box-title .mall-title-name').innerText.trim();
    //         const address = mall.querySelector('.mall-box-details .mall-box-details-address').innerText.trim();
    //         const hoursElements = mall.querySelectorAll('.mall-box-details .mall-box-details-line');
    //         const hours = Array.from(hoursElements).map(element => element.innerText.trim());
    //         const img = mall.querySelector('.mall-box-photo img').src;
    //         const link = mall.querySelector('.mall-box-button').href;

    //         mallList.push({ name, title, address, hours, img, link });
    //     });
    //     return mallList;
    // });

    // // Scrape store links for each mall
    // for (let mall of malls) {
    //     await page.goto(mall.link, { waitUntil: 'networkidle2' });

    //     // Wait for the inner-wrapper to load
    //     await page.waitForSelector('.inner-wrapper');

    //     // Scrape the link to all stores
    //     const storesLink = await page.evaluate(() => {
    //         const storeLinkElement = document.querySelector('.inner-wrapper .page-header-title .all-stores a');
    //         return storeLinkElement ? storeLinkElement.href : null;
    //     });

    //     mall.storesLink = storesLink;
    // }
    // const desiredMalls = ["תל אביב","ירושלים", "חולון", "עכו", "מודיעין" ];
    // for(let mall of malls){
    //     if(desiredMalls.includes(mall.title)){
        

            await page.goto("https://www.azrielimalls.co.il/%D7%97%D7%A0%D7%95%D7%99%D7%95%D7%AA/5/%D7%A2%D7%96%D7%A8%D7%99%D7%90%D7%9C%D7%99-%D7%97%D7%95%D7%9C%D7%95%D7%9F/"
                , { waitUntil: 'networkidle2' });
            console.log("after goto mall page");
            // Scrape the store data
            const stores = await page.evaluate(() => {
                const storeElements = document.querySelectorAll('.shop-boxes-wrapper .shop-box');
                const storeList = [];
                storeElements.forEach(store => {
                    console.log("floating-stores");
                    const name = store.querySelector('.shop-box-text-title').innerText.trim();
                    const floor = store.querySelector('.shop-box-text-location').innerText.trim();
                    const phoneNumber = store.querySelector('.shop-box-text-phone').innerText.trim();
                    const link = store.href;
                    storeList.push({ name, floor, phoneNumber, link });
                });
                return storeList;
            });
            console.log("after getting storeList");
            for (let store of stores) {
                console.log(store.name);
                await page.goto(store.link, { waitUntil: 'networkidle2' });
                await page.waitForSelector('.store-header');
                const storeDetails = await page.evaluate(() => {
                    const img = document.querySelector('.store-header-logo img').src;
                    return {img};
                });
                // Update the store object with detailed data
                Object.assign(store, storeDetails);
            }
            // mall.stores = stores;
    //     }
    // }

    fs.writeFileSync('holonStores.json', JSON.stringify(stores, null, 2), 'utf-8');
    console.log("success scraping");
    await browser.close();
}

scrapeMalls();
