const path = require('path')
const fs = require('fs')

const puppeteer = require('puppeteer-core')
const findChrome = require('carlo/lib/find_chrome')

const { data } = require('../src/config/data.json')

const outputDir = path.join(__dirname, '../public/images')

async function screenshot (data) {
  const findChromePath = await findChrome({})
  const executablePath = findChromePath.executablePath

  const browser = await puppeteer.launch({
    executablePath
  })
  const page = await browser.newPage()
  await page.setViewport({
    width: 1366,
    height: 768
  })

  // 访问数据中的链接并截图
  let path = ''
  for (let i = 0; i < data.length; i++) {
    const { id, link: url, title } = data[i]
    path = `${outputDir}/${id}.jpg`
    if (fs.existsSync(path)) {
      console.log(`${id}-${title}: ${id}.jpg 已存在`)
    } else {
      await page.goto(url, {
        // waitUtil: 'networkidle2'
      })
      // await page.reload()
      await page.waitFor(1000)
      await page.screenshot({ path, type: 'jpeg', quality: 50 }).then(() =>
        console.log(`${id}-${title}: Created ${path}`)
      )
    }
  }
  await browser.close()
}

screenshot(data)
