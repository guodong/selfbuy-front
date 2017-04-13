import  { Component } from  '@angular/core';

import  { Product }  from './product';

const PRODUCTS: Product[] = [
  {name: 'Mr. Nice',  img: '81.jpg' ,price: 18.2},
  {name: 'Narco',     img: '82.jpg' ,price: 18.2},
  {name: 'Bombasto',  img: '83.jpg' ,price: 18.2},
  {name: 'Celeritas', img: '84.jpg' ,price: 18.2},
  {name: 'Magneta',   img: '85.jpg' ,price: 18.2},
  {name: 'RubberMan', img: '86.jpg' ,price: 18.2},
  {name: 'Dynama',    img: '87.jpg' ,price: 18.2},
  {name: 'Dr IQ',     img: '88.jpg' ,price: 18.2},
  {name: 'Magma',     img: '89.jpg' ,price: 18.2},
  {name: 'Tornado',   img: '90.jpg' ,price: 18.2}
];

@Component ({
  selector: 'demo1-app',
  templateUrl: './nav.component.html',
  styleUrls:   ['./nav.component.css'],

})

export class Demo6Component {
 products = PRODUCTS;
}
