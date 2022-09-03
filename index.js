

const pruebaNavegador = async ()=> {
    const puppeteer = require("puppeteer"); 
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()
    page.goto("http://www.example.com")
    await page.waitForSelector("h1", {timeout: 5000})

    await browser.close()
}

pruebaNavegador()

