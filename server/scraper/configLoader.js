const fs = require('fs');
const path = require('path');

function loadConfig(configName) {
    const configPath = path.join(__dirname, 'configs', `${configName}.json`);
    if (!fs.existsSync(configPath)) {
        throw new Error(`Config file for ${configName} does not exist`);
    }
    return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
}

module.exports = {
    loadConfig
};
