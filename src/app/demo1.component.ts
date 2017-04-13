import  { Component } from  '@angular/core';

import  { Product }  from './product';


const PRODUCTS: Product[] = [
  {name: 'Mr. Nice',  img: '1.jpg' ,price: 18.2},
  {name: 'Narco',     img: '2.jpg' ,price: 18.2},
  {name: 'Bombasto',  img: '3.jpg' ,price: 18.2},
  {name: 'Celeritas', img: '4.jpg' ,price: 18.2},
  {name: 'Magneta',   img: '5.jpg' ,price: 18.2},
  {name: 'RubberMan', img: '6.jpg' ,price: 18.2},
  {name: 'Dynama',    img: '7.jpg' ,price: 18.2},
  {name: 'Dr IQ',     img: '8.jpg' ,price: 18.2},
  {name: 'Magma',     img: '9.jpg' ,price: 18.2},
  {name: 'Tornado',   img: '2.jpg' ,price: 18.2}
];




@Component ({
  selector: 'demo1-app',
  templateUrl: './nav.component.html',
  styleUrls:   ['./nav.component.css'],

})

export class Demo1Component {
  title = " 促销食品。";

  products = PRODUCTS;
}
