import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'spotify';

  // car: any = {
  //   brand: 'Ford',
  //   model: 'Fiesta',
  //   year: 1999
  // }

  status: string | number = 'active';

  car: CarModel = {
    brand: 'Ford',
    model: 'Fiesta',
    year: 1999
  }

  listCars: Array<CarModel> = [
    {
      brand: 'Ford',
      model: 'Fiesta',
      year: 1999
    },
    {
      brand: 'Chevrolet',
      model: 'Camaro',
    },
    {
      brand: 'Toyota',
      model: 'Corolla',
      year: 2001
    }
  ]
}

// las interfaces son una forma de definir la estructura de un objeto
// en este caso, la interfaz Car define que un objeto de tipo Car debe tener las propiedades brand, model y year
interface CarModel {
  brand: string;
  model: string;
  year?: number; // el signo de interrogación indica que la propiedad es opcional
}
