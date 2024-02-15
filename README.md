# RouterOutletsDemo

This project shows 3 ways of using router-outlets in Angular.

## 1. Basic Router Outlet
This is the most basic way of using `router-outlet`. It is used to show one component in the main part of the layout based on the URL.
An example is in `src/app/app.component.html`, where it is simply added as `<router-outlet />`.

The content to be displayed in the router outlet is defined in `src/app/app.routes.ts`:
```typescript
const routes: Routes = [
  { path: '', component: HomeView },
  { path: 'firstPage', component: SlotsView, ...},
  { path: 'secondPage', component: SlotsView, ...},
  ...
];
```

So at the URL `http://localhost:4200`, the `HomeView` component will be displayed in the router outlet, and ath the URLs `http://localhost:4200/firstPage` and `http://localhost:4200/secondPage`, the `SlotsView` component will be displayed in the router outlet.

## 2. Named Router Outlet
This is a way of using multiple `router-outlet`s in the same component. It is used to show additional secondary content in the layout.
An example is in `src/app/app.component.html`, where it is added as `<router-outlet name="modal"></router-outlet>`.

The content to be displayed in the router outlet is defined in `src/app/app.routes.ts`:
```typescript
const routes: Routes = [
  ...,
  {
    path: 'exampleModal',
    outlet: 'modal',
    component: ExampleModalComponent,
  }
];
```

So at the URL `http://localhost:4200/(modal:exampleModal)`, the `ExampleModalComponent` component will be displayed in addition to the main content.
By combinint the URL parts, it is possible to display the modal on other pages as well, for example:
- `http://localhost:4200/firstPage(modal:exampleModal)`
- `http://localhost:4200/secondPage(modal:exampleModal)`

## 3. Nested Child Router Outlets

This is a way of using `router-outlet`s inside another `router-outlet`. It is used to show different content within a layout container which is specified by the main route configuration.
An example is in `src/app/views/slots/slots.view.html`, where it is added as `<router-outlet name="slotA"></router-outlet>` and `<router-outlet name="slotB"></router-outlet>`.

The contents of `SlotA` and `SlotB` are defined in `src/app/app.routes.ts`:
```typescript
const routes: Routes = [
  ...,
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
  ...
];
```

This makes it possible to use the same `SlotsView` as a layout for both pages, but inject different content into the child slots.
