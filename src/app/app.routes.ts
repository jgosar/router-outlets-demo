import { Routes } from '@angular/router';
import {HomeView} from "./views/home/home.view";
import {SlotsView} from "./views/slots/slots.view";
import { RouterOutlet1Component} from "./router-outlets/router-outlet-1/router-outlet-1.component";
import { RouterOutlet2Component} from "./router-outlets/router-outlet-2/router-outlet-2.component";
import {ExampleModalComponent} from "./router-outlets/example-modal/example-modal.component";

export const routes: Routes = [
  { path: '', component: HomeView },
  { path: 'firstPage', component: SlotsView, children: [
      {
        path: '',
        outlet: 'slotA',
        component: RouterOutlet1Component,
      },{
        path: '',
        outlet: 'slotB',
        component: RouterOutlet2Component,
      }
    ]
  },
  { path: 'secondPage', component: SlotsView, children: [
      {
        path: '',
        outlet: 'slotA',
        component: RouterOutlet2Component,
      },{
        path: '',
        outlet: 'slotB',
        component: RouterOutlet1Component,
      }
    ]
  },
  {
    path: 'exampleModal',
    outlet: 'modal',
    component: ExampleModalComponent,
  }
];
