const cheerio = require('cheerio')
const puppeteer = require('puppeteer')
const request = require('request-promise-native')

const { Nuxt, Builder } = require('nuxt')
const config = require('./fixture/nuxt.config')

const url = path => `http://localhost:3000${path}`
const get = path => request(url(path))

jest.setTimeout(100000)

describe('basic', () => {
  let nuxt
  let page
  let browser

  beforeAll(async () => {
    nuxt = new Nuxt(config)

    const createNuxt = async () => {
      await new Builder(nuxt).build()
      await nuxt.listen(3000)
    }
    const createBrowser = async () => {
      browser = await puppeteer.launch({ headless: false, timeout: 0 })
      page = await browser.newPage()
    }
    await Promise.all([
      createNuxt(),
      createBrowser()
    ])
  }, 60000)

  afterAll(async () => {
    await browser.close()
    await nuxt.close()
  })

  test('on Server', async () => {
    const html = await get('/')
    const $ = cheerio.load(html)
    expect($('[data-test-id="input"]').val()).toBe('false')
  })

  test('on Client', async () => {
    await page.goto(url('/'))
    await page.waitFor(5000)
    const val = await page.evaluate(() => (document.querySelector('[data-test-id="input"]').value))
    expect(val).toBe('true')
  })
})
