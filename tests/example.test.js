const puppeteer = require("puppeteer")

describe ("mi primara prueba abriendo un  navegador", ()=> {

    it ("debe abriri el navegador" , async ()=> {
        const browser = await puppeteer.launch({headless: false, slowMo:500})
        const page = await browser.newPage()
        await page.goto("http://www.example.com")
        await page.waitForSelector("h1")
        await browser.close()
        
    })


})