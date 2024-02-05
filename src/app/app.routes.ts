import { Routes } from '@angular/router';
import {HomeView} from "./views/home/home.view";
import {SlotsView} from "./views/slots/slots.view";
import {RouterOutlet1} from "./router-outlets/router-outlet-1/router-outlet-1.router-outlet";
import {RouterOutlet2} from "./router-outlets/router-outlet-2/router-outlet-2.router-outlet";

export const routes: Routes = [
  { path: '', component: HomeView },
  { path: 'firstPage', component: SlotsView, children: [
      {
        path: '',
        outlet: 'slotA',
        component: RouterOutlet1,
      },{
        path: '',
        outlet: 'slotB',
        component: RouterOutlet2,
      }
    ]
  },
  { path: 'secondPage', component: SlotsView, children: [
      {
        path: '',
        outlet: 'slotA',
        component: RouterOutlet2,
      },{
        path: '',
        outlet: 'slotB',
        component: RouterOutlet1,
      }
    ]
  },
];
