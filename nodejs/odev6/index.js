const Koa = require('koa');
const route = require('koa-route');


const app = new Koa();

app.use(route.get('/about', about));

app.use(route.get('/contact', contact));


function about() {
    this.body = "<h1>Hakkımda sayfasına hoşgeldiniz</h1>";
}

function contact() {
    this.body = "<h1>İletişim sayfasına hoşgeldiniz</h1>";
}

app.use(ctx => {
    ctx.body = "<h1>Anasayfama hoşgeldiniz</h1>";
});

app.listen(3000);