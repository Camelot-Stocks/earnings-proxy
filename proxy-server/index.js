require('newrelic');
const express = require('express')
const proxy = require('http-proxy-middleware');
const app = express()
const port = 3000;
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use('/:id', express.static(path.join(__dirname)));
app.use('/earnings/:id', proxy({ target: 'http://localhost:3006', changeOrigin: true }))

// app.get('/about/getData', (req, res) => {
//     var id = req.params.id || 1;
//     res.redirect(`http://13.52.245.200/about/getData/?id=${id}`);
// })

// app.get('/ratings/getData', (req, res) => {
//     var id = req.params.id || 1;
//     res.redirect(`http://54.153.72.27/ratings/getData/?id=${id}`);
// })

// app.get('/ratings/:photo', (req, res) => {
//     res.redirect(`http://54.153.72.27${req.url}`)
// })


// app.get('/earnings/getData', (req, res) => {
//     res.redirect('http://54.67.103.66/earnings/getData');
// })

// app.get('/news/getData', (req, res) => {
//     res.redirect('http://54.193.67.89/news/getData');
// })


// app.get('/tradestock/api', (req, res) => {
//     var id = req.params.id || 1;
//     res.redirect(`http://34.214.68.82/tradestock/api/?id=${id}`);
// });

// app.get('/questionMark.png', (req, res) => {
//     res.redirect('http://34.214.68.82/questionMark.png')
// })

// app.get('/exclamation.png', (req, res) => {
//     res.redirect('http://34.214.68.82/exclamation.png')
// })

// app.get('/exclamation-button.png', (req, res) => {
//     res.redirect('http://34.214.68.82/exclamation-button.png')
// })

// app.get('/arrows.png', (req, res) => {
//     res.redirect('http://34.214.68.82/arrows.png')
// })

// app.get('/arrows_black.png', (req, res) => {
//     res.redirect('http://34.214.68.82/arrows_black.png')
// })


// app.get('/graph/getStocks', (req, res) => {
//     res.redirect('http://54.153.91.76/graph/getStocks');
// })

// app.get('/graph/img/:photo', (req, res) => {
//     res.redirect(`http://54.153.91.76/graph/img/${path.basename(req.url)}`)
// })

// app.get('/navbar/img/:photo', (req, res) => {
//     res.redirect(`http://54.219.176.99/navbar/img/${path.basename(req.url)}`)
// })

// app.post('/updateLineColors', (req, res) => {
//     res.end();
// })

app.listen(port, () => console.log(`$$ flowing on port ${port}!`))