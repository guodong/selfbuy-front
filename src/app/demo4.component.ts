import  { Component } from  '@angular/core';



import  { Product }  from './product';

const PRODUCTS: Product[] = [
  {name: 'Mr. Nice',  img: '51.jpg' ,price: 18.2},
  {name: 'Narco',     img: '52.jpg' ,price: 18.2},
  {name: 'Bombasto',  img: '53.jpg' ,price: 18.2},
  {name: 'Celeritas', img: '54.jpg' ,price: 18.2},
  {name: 'Magneta',   img: '55.jpg' ,price: 18.2},
  {name: 'RubberMan', img: '56.jpg' ,price: 18.2},
  {name: 'Dynama',    img: '57.jpg' ,price: 18.2},
  {name: 'Dr IQ',     img: '58.jpg' ,price: 18.2},
  {name: 'Magma',     img: '59.jpg' ,price: 18.2},
  {name: 'Narco',     img: '52.jpg' ,price: 18.2},
  {name: 'Bombasto',  img: '53.jpg' ,price: 18.2},
  {name: 'Celeritas', img: '54.jpg' ,price: 18.2},
  {name: 'Magneta',   img: '55.jpg' ,price: 18.2},
  {name: 'RubberMan', img: '56.jpg' ,price: 18.2},
  {name: 'Dynama',    img: '57.jpg' ,price: 18.2},
  {name: 'Dr IQ',     img: '58.jpg' ,price: 18.2},
  {name: 'Magma',     img: '59.jpg' ,price: 18.2},
  {name: 'Tornado',   img: '60.jpg' ,price: 18.2}
];

@Component ({
  selector: 'demo1-app',
  templateUrl: './nav.component.html',
  styleUrls:   ['./nav.component.css'],
})

export class Demo4Component {
 products = PRODUCTS;
}
