import { InMemoryDbService } from 'angular-in-memory-web-api';

export class BarData implements InMemoryDbService {

  createDb() {
    let bars = [
      {
        "id": 1,
        "title": "Krawill",
        "rating": 4.3,
        "shortDescription": "2x1 de 20:00 a 21:00",
        "description": "Ambiente rock/metal asegurado, 2x1 en cervezas de 20:00 a 21:00",
        "menu": ["Cocido", "Salmón a la plancha", "Potaje de frutas"],
        "image": "/assets/images/img1.jpg"
      },
      {
        "id": 2,
        "title": "BarKatu",
        "rating": 3.5,
        "shortDescription": "Música y ambiente asegurados",
        "description": "Todos los viernes y sábados tenémos música folclorica.",
        "menu": ["A la carta", "Rebuelto de gambas", "Tarta de queso"],
        "image": "/assets/images/img2.jpg"
      },
      {
        "id": 3,
        "title": "Viana",
        "rating": 4.2,
        "shortDescription": "Fiesta 'lowCost'",
        "description": "Abierto solo fines de semana con chupitos a 1€",
        "menu": ["Huevo frito con ternera y patatas", "Capricho de la casa"],
        "image": "/assets/images/img3.jpg"
      },
      {
        "id": 4,
        "title": "Olympus Beer",
        "rating": 3.9,
        "shortDescription": "Birras y más birras",
        "description": "Música Jazz y Blues los fines de semana y 3x1 en cervezas",
        "menu": ["Garbanzos", "Ternera", "Gosua"],
        "image": "/assets/images/img4.jpg"
      },
      {
        "id": 5,
        "title": "Herriko Taberna",
        "rating": 2,
        "shortDescription": "Comidas/cenas locales",
        "description": "Para que toda la fimilia difrute de la gastronomía local",
        "menu": ["Puré", "Arroz", "Yogurt"],
        "image": "/assets/images/img5.jpg"
      },
      {
        "id": 6,
        "title": "Bar Txutibel",
        "rating": 4.6,
        "shortDescription": "Música electrónica y mucha fiesta",
        "description": "Nuevos Djs todos los Viernes y Sábados de 19:00 a 22:00",
        "menu": ["Sopa", "Pollo", "Cuajada"],
        "image": "/assets/images/img6.jpg"
      }
    ];
    return { bars: bars };
  }
}
