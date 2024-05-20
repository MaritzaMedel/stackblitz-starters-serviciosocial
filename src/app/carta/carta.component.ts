import { Component } from '@angular/core';

@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [],
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.css',
})
export class CartaComponent {
  carta = {
    epys: '',
    subjefe: '',
    nombre_alumno: '',
    matricula: '',
    carrera_alumno: '',
    institucion: '',
    supervisor: '',
    fecha_inicio: '',
    fecha_fin: '',
    fecha_extension: '',
  };

  onSubmit() {
    localStorage.setItem('carta', JSON.stringify(this.carta));
    alert('Datos guardados');
  }

  verDatosGuardados() {
    const datosGuardados = localStorage.getItem('carta');
    if (datosGuardados) {
      alert('Datos guardados');
    } else {
      alert('No hay datos guardados');
    }
  }
}
