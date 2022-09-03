const puppeteer = require("puppeteer")
const expect = require("chai").expect

describe ( "Desafío 3 , prueba de assertions", async ()=> {

    it ("tomar el precio de la pagina ppal", async ()=> {
        const browser = await puppeteer.launch({headless: false})
        const page = await browser.newPage()
        await page.goto("http://automationpractice.com/index.php")
        await page.waitForSelector(".content_price")
        const precioPpal = await page.$eval(".product-price", element => element.textContent.trim())
        console.log ("precioPpalprecioPpal =", precioPpal)

        // elegir un producto para colocarlo en el carrito
        await page.waitForSelector(".button-container")
        await page.click(".ajax_add_to_cart_button")
       
        // presionar boton "Continue Shopping" para luego ir al carrito
        await page.waitForTimeout(6000)
        await page.waitForSelector('.button-container')
        await page.click('.icon-chevron-left')
        
         
    /*   
       // ****OJO:===>> SI DESCOMENTAS ESTA PARTE SE INTRODUCE OTRO PRODUCRO EN EL CARRITO SOLO PARA VER LA DIFERENCIA DE PRECIO ****
        await page.waitForTimeout(2000)
        await page.waitForSelector(".button-container")
        await page.click(".ajax_add_to_cart_button")
         // presionar boton "Continue Shopping" para luego ir al carrito
         await page.waitForTimeout(6000)
         await page.waitForSelector('.button-container')
         await page.click('.icon-chevron-left')
        // ******************************************************************************************************** 
    */    
        
        
        // AOHRA ,,, extraer el precion del carrito
        await page.waitForSelector(".product-atributes")
        const precioCarrito = await page.$eval(".price", element => element.textContent.trim())
        console.log ("precio en el Carrito =", precioCarrito)

        // Ahora se compara los prcios con ASSERCION
        const title1 = "mensaje 1"
        const title2 = "mensaje 2"
        expect(precioPpal).to.be.equal(precioCarrito)
        console.log ("FIN***")
        await browser.close()
    })

        
})