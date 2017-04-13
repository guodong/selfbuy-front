import  { Component } from  '@angular/core';

import  { Product }  from './product';

const PRODUCTS: Product[] = [
  {name: 'Mr. Nice',  img: '31.jpg' ,price: 18.2},
  {name: 'Narco',     img: '32.jpg' ,price: 18.2},
  {name: 'Bombasto',  img: '33.jpg' ,price: 18.2},
  {name: 'Celeritas', img: '34.jpg' ,price: 18.2},
  {name: 'Magneta',   img: '35.jpg' ,price: 18.2},
  {name: 'RubberMan', img: '36.jpg' ,price: 18.2},
  {name: 'Dynama',    img: '37.jpg' ,price: 18.2},
  {name: 'Dr IQ',     img: '38.jpg' ,price: 18.2},
  {name: 'Magma',     img: '39.jpg' ,price: 18.2},
  {name: 'Mr. Nice',  img: '31.jpg' ,price: 18.2},
  {name: 'Narco',     img: '32.jpg' ,price: 18.2},
  {name: 'Bombasto',  img: '33.jpg' ,price: 18.2},
  {name: 'Celeritas', img: '34.jpg' ,price: 18.2},
  {name: 'Magneta',   img: '35.jpg' ,price: 18.2},
  {name: 'RubberMan', img: '36.jpg' ,price: 18.2},
  {name: 'Dynama',    img: '37.jpg' ,price: 18.2},
  {name: 'Dr IQ',     img: '38.jpg' ,price: 18.2},
  {name: 'Magma',     img: '39.jpg' ,price: 18.2},
  {name: 'Tornado',   img: '40.jpg' ,price: 18.2}
];

@Component ({
  selector: 'demo1-app',
  templateUrl: './nav.component.html',
  styleUrls:   ['./nav.component.css'],

})

export class Demo3Component {
 products = PRODUCTS;
}
