import { Application } from 'https://deno.land/x/abc/mod.ts'

const app = new Application()
app
  .static('/locales', './locales')
  .start({ port: 8080 })


import i18next from 'https://cdn.jsdelivr.net/gh/i18next/i18next/src/index.js'
// import i18next from '../i18next/src/index.js'
import HttpBackend from 'https://cdn.jsdelivr.net/gh/i18next/i18next-http-backend/index.js'

i18next.use(HttpBackend).init({
  lng: 'en',
  fallbackLng: 'en',
  preload: ['en', 'de'],
  ns: ['translation'],
  defaultNS: 'translation',
  backend: {
    loadPath: 'http://localhost:8080/locales/{{lng}}/{{ns}}.json'
  }
}, (err, t) => {
  if (err) return console.error(err)
  console.log(t('welcome'))
  console.log(t('welcome', { lng: 'de' }))
})
