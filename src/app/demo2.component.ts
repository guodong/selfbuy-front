import  { Component } from  '@angular/core';

import  { Product }  from './product';

const PRODUCTS: Product[] = [
  {name: 'Mr. Nice',  img: '11.jpg' ,price: 18.2},
  {name: 'Narco',     img: '21.jpg' ,price: 18.2},
  {name: 'Bombasto',  img: '13.jpg' ,price: 18.2},
  {name: 'Celeritas', img: '14.jpg' ,price: 18.2},
  {name: 'Magneta',   img: '15.jpg' ,price: 18.2},
  {name: 'RubberMan', img: '16.jpg' ,price: 18.2},
  {name: 'Dynama',    img: '17.jpg' ,price: 18.2},
  {name: 'Dr IQ',     img: '18.jpg' ,price: 18.2},
  {name: 'Magma',     img: '19.jpg' ,price: 18.2},
  {name: 'Tornado',   img: '20.jpg' ,price: 18.2}
];

@Component ({
  selector: 'demo1-app',
  templateUrl: './nav.component.html',
  styleUrls:   ['./nav.component.css'],
})

export class Demo2Component {
  products = PRODUCTS;
}
