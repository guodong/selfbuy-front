import  { Component } from  '@angular/core';


import  { Product }  from './product';

const PRODUCTS: Product[] = [
  {name: 'Mr. Nice',  img: '61.jpg' ,price: 18.2},
  {name: 'Narco',     img: '62.jpg' ,price: 18.2},
  {name: 'Bombasto',  img: '63.jpg' ,price: 18.2},
  {name: 'Celeritas', img: '64.jpg' ,price: 18.2},
  {name: 'Magneta',   img: '65.jpg' ,price: 18.2},
  {name: 'RubberMan', img: '66.jpg' ,price: 18.2},
  {name: 'Dynama',    img: '67.jpg' ,price: 18.2},
  {name: 'Dr IQ',     img: '68.jpg' ,price: 18.2},
  {name: 'Magma',     img: '69.jpg' ,price: 18.2},
  {name: 'Tornado',   img: '70.jpg' ,price: 18.2},
  {name: 'Tornado',   img: '71.jpg' ,price: 18.2},
  {name: 'Bombasto',  img: '63.jpg' ,price: 18.2},
  {name: 'Celeritas', img: '64.jpg' ,price: 18.2},
  {name: 'Magneta',   img: '65.jpg' ,price: 18.2},
  {name: 'RubberMan', img: '66.jpg' ,price: 18.2},
  {name: 'Dynama',    img: '67.jpg' ,price: 18.2},
  {name: 'Dr IQ',     img: '68.jpg' ,price: 18.2},
  {name: 'Magma',     img: '69.jpg' ,price: 18.2},
  {name: 'Tornado',   img: '70.jpg' ,price: 18.2},
  {name: 'Tornado',   img: '71.jpg' ,price: 18.2},
  {name: 'Tornado',   img: '72.jpg' ,price: 18.2}

];

@Component ({
  selector: 'demo1-app',
  templateUrl: './nav.component.html',
  styleUrls:   ['./nav.component.css'],

})

export class Demo5Component {
  products = PRODUCTS;
}
