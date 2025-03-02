import { Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';

export const routes: Routes = [
    {
        path: '', // almacenar la ruta raíz localhost:4200/
        component: ExampleComponent, // componente que se renderizará
    },
    {
        path: 'hello', // almacenar la ruta raíz localhost:4200/hello
        component: ExampleComponent, // componente que se renderizará
    },
];
