
const mallsGroups = [
  {
    name: "BIG",
    mallsUrl: "https://bigcenters.co.il/property/",
    numberOfMalls: 25,
    scrapingIntruction: ""
  },
  {
    name: "Ofer",
    mallsUrl: "https://myofer.co.il/malls",
    numberOfMalls: 18,
    scrapingIntruction: {
      mallList: ".sc-72d416da-37",
      mall: ".sc-a8e43978-15",
      mallFields: {
        name: ".jNAQzz"
      }
    }
  },
  {
    name: "Azrieli",
    mallsUrl: "https://www.azrielimalls.co.il/%D7%A7%D7%A0%D7%99%D7%95%D7%A0%D7%99%D7%9D",
    numberOfMalls: 19,
    scrapingIntruction: {
      mallList: ".mall-boxes-wrapper",
      mall: ".mall-boxes-wrapper .mall-box",
      mallFields: {
        name: ".mall-box-title .mall-title-text",
        title: ".mall-box-title .mall-title-name",
        adress: ".mall-box-details .mall-box-details-address",
        hours: ".mall-box-details .mall-box-details-line",
        mallPageLink: ".mall-box-button"
      }
    }
  }
];

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

module.exports = { mallsGroups, oferHebToEng };









