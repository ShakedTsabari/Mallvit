const fs = require('fs');
const path = require('path');

// Load imageHashMap and JSON data
const { imageHashMap } = require('./ImgToStore');
const mallsData = require('./malls.json');
const updatedMallsData = require('./updatedMalls.json');

// Step 1: Extract new mappings from malls.json and update ImgToStore.js
mallsData.forEach(mall => {
    if (Array.isArray(mall.stores)) {
        mall.stores.forEach(store => {
            if (!imageHashMap[store.name]) {
                imageHashMap[store.name] = store.img;
            }
        });
    }
});

// Save the updated imageHashMap back to ImgToStore.js
const imgToStorePath = path.join(__dirname, 'ImgToStore.js');
fs.writeFileSync(
    imgToStorePath,
    `const imageHashMap = ${JSON.stringify(imageHashMap, null, 2)};\nmodule.exports = { imageHashMap };`,
    'utf8'
);

// Step 2: Update bad image URLs in updatedMalls.json
const badImgSrc = "https://media.azrielimalls.co.il0/";

updatedMallsData.forEach(mall => {
    if (Array.isArray(mall.stores)) {
        mall.stores.forEach(store => {
            if (store.img === badImgSrc && imageHashMap[store.name]) {
                store.img = imageHashMap[store.name];
            }
        });
    }
});

// Save the updated JSON data
const updatedMallsPath = path.join(__dirname, 'updatedMalls.json');
fs.writeFile(updatedMallsPath, JSON.stringify(updatedMallsData, null, 2), 'utf8', err => {
    if (err) {
        console.error('Error writing the file', err);
    } else {
        console.log('File has been updated successfully');
    }
});
