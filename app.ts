import Drash from 'https://deno.land/x/drash@v0.39.5/mod.ts';

class TranslationResource extends Drash.Http.Resource {
  static paths = ['/locales/en/translation.json'];
  public GET() {
    // this.response.body = JSON.stringify({ welcome: 'hello world' });
    this.response.body = { welcome: 'hello world' };
    return this.response;
  }
}

const server = new Drash.Http.Server({
  address: 'localhost:1447',
  // response_output: 'text/html',
  response_output: 'application/json',
  resources: [TranslationResource]
});

server.run();


// import i18next from 'https://cdn.jsdelivr.net/gh/i18next/i18next/src/i18next.js'
import i18next from 'https://cdn.jsdelivr.net/gh/i18next/i18next@v14.1.1/src/i18next.js'
import HttpBackend from 'https://cdn.jsdelivr.net/gh/i18next/i18next-http-backend/index.js'

i18next.use(HttpBackend).init({
  // debug: true,
  lng: 'en',
  backend: {
    loadPath: 'http://localhost:1447/locales/{{lng}}/{{ns}}.json'
  }
})

setTimeout(() => {
  console.log(i18next.t('welcome'))
}, 2000)
