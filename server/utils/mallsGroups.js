
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
      mallList: "sc-72d416da-37 sc-a8e43978-12 jbVvGa gKUEpq",
      mall: "sc-72d416da-38 sc-a8e43978-15 enWULC clagHV",
      mallFields: {
        mallPageLink: "sc-a8e43978-16 iBSvPk"
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
]

module.exports = { mallsGroups };









