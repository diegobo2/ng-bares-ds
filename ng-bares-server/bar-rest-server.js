"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Bar = /** @class */ (function () {
    function Bar(id, title, rating, shortDescription, description, menu, image) {
        this.id = id;
        this.title = title;
        this.rating = rating;
        this.shortDescription = shortDescription;
        this.description = description;
        this.menu = menu;
        this.image = image;
    }
    return Bar;
}());
var bars = [
    new Bar(1, "Krawill", 4.3, "2x1 de 20:00 a 21:00", "Ambiente rock/metal asegurado, 2x1 en cervezas de 20:00 a 21:00", ["Cocido", "Salmón a la plancha", "Potaje de frutas"], "/assets/images/img1.jpg"),
    new Bar(2, "BarKatu", 3.5, "Música y ambiente asegurados", "Todos los viernes y sábados tenémos música folclorica.", ["A la carta", "Rebuelto de gambas", "Tarta de queso"], "/assets/images/img2.jpg"),
    new Bar(3, "Viana", 4.2, "Fiesta 'lowCost'", "Abierto solo fines de semana con chupitos a 1€", ["Huevo frito con ternera y patatas", "Capricho de la casa"], "/assets/images/img3.jpg"),
    new Bar(4, "Olympus Beer", 3.9, "Birras y más birras", "Música Jazz y Blues los fines de semana y 3x1 en cervezas", ["Garbanzos", "Ternera", "Gosua"], "/assets/images/img4.jpg"),
    new Bar(5, "Herriko Taberna", 5, "Comidas/cenas locales", "Para que toda la fimilia difrute de la gastronomía local", ["Puré", "Arroz", "Yogurt"], "/assets/images/img5.jpg"),
    new Bar(6, "Bar Txutibel", 4.6, "Música electrónica y mucha fiesta", "Nuevos Djs todos los Viernes y Sábados de 19:00 a 22:00", ["Sopa", "Pollo", "Cuajada"], "/assets/images/img6.jpg")
];
function getBars() {
    return bars;
}
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.post('/bars', bodyParser.json(), function (req, res) {
    var bNew = new Bar(bars.length + 1, req.body.title, req.body.rating, req.body.shortDescription, req.body.description, req.body.menu, req.body.image);
    bars.push(bNew);
    res.status(200).send({
        id: bNew.id,
        title: bNew.title,
        rating: bNew.rating,
        shortDescription: bNew.shortDescription,
        description: bNew.description,
        menu: bNew.menu,
        images: bNew.image
    });
});
app.get('/', function (req, res) {
    res.send('The URL of bars is http://localhost:8000/bars');
});
app.get('/bars', function (req, res) {
    res.json(getBars());
});
function getBarsById(barId) {
    var p;
    p = bars.find(function (p) { return p.id == barId; });
    return p;
}
app.get('/bars/:id', function (req, res) {
    res.json(getBarsById(parseInt(req.params.id)));
});
function updateBarssById(req, barId) {
    var p;
    p = bars.find(function (p) { return p.id == barId; });
    var index = bars.indexOf(p);
    p.title = req.body.title,
        p.price = req.body.price,
        p.rating = req.body.rating,
        p.shortDescription = req.body.shortDescription,
        p.description = req.body.description,
        p.categories = req.body.categories,
        p.images = req.body.images;
    bars[index] = p;
    return p;
}
app.put('/bars/:id', function (req, res) {
    res.json(updateBarssById(req, parseInt(req.params.id)));
    res.send('Got a UPDATE request at /user');
});
function deleteBarsById(barId) {
    var p;
    p = bars.find(function (p) { return p.id == barId; });
    var index = bars.indexOf(p);
    delete bars[index];
    return p;
}
app.delete('/bars/:id', function (req, res) {
    res.json(deleteBarsById(parseInt(req.params.id)));
    res.send('Got a DELETE request at /user');
});
var server = app.listen(8000, "localhost", function () {
    var _a = server.address(), address = _a.address, port = _a.port;
    console.log('Listening on %s %s', address, port);
});
