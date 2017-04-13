import  { Component } from '@angular/core';

@Component({
  selector:  'my-nav',
  template: `
<div>
  <table   cellspacing="5"   >
 　<tr> 
  　　<th [routerLink]="['/demo1']">进口食品</th>
  　　<th [routerLink]="['/demo2']">零食</th>
  　　<th [routerLink]="['/demo3']">日用品</th>
  　　<th [routerLink]="['/demo4']">加关注</th>   
   </tr>

<tr>　
  <th [routerLink]="['/demo5']">饮料</th>
　<th rowspan="2"[routerLink]="['/demo6']">促销</th>　
  <th rowspan="2"[routerLink]="['/demo7']">取货</th>　
  <th rowspan="2"[routerLink]="['/demo1']">搜索</th>
</tr>

<tr>
　　<th>加关注</th>
</tr>
</table> 
<div>
`,
  styles: [`      
     th{
      height:190px;
      width:300px; 
      background-color:gainsboro;
       border-radius: 4px;   
     }
     div{
     background-color:white;
     }
    
         


`]
})
export class NavigationComponent {

}
