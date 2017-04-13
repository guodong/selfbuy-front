import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';
import { RouterModule }        from '@angular/router';
import { AppComponent }        from './app.component';

import { Demo1Component }      from './demo1.component';
import { Demo2Component }      from "./demo2.component";
import { Demo3Component }      from "./demo3.component";
import { Demo4Component }      from "./demo4.component";
import { Demo5Component }      from "./demo5.component";
import { Demo6Component }      from "./demo6.component";
import { Demo7Component }      from "./demo7.component";
import { NavigationComponent } from "./navigation.component"

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'demo1',
        component: Demo1Component
      },
      {
        path: 'demo2',
        component: Demo2Component
      },
      {
        path: 'demo3',
        component: Demo3Component
      },
      {
        path: 'demo4',
        component: Demo4Component
      },
      {
        path: 'demo5',
        component: Demo5Component
      },
      {
        path: 'demo6',
        component: Demo6Component
      },
      {
        path: 'demo7',
        component: Demo7Component
      },
      {
        path: '',
        component: NavigationComponent
      }

    ])
  ],
  declarations: [
    AppComponent,

    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    Demo5Component,
    Demo6Component,
    Demo7Component,
    NavigationComponent
  ],
  providers: [

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
