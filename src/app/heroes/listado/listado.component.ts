import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Goku', 'Vegeta', 'Capitan America', 'Hulk', 'Spiderman'];
  heroesBorrados: string = '';

  borrarHeroe() {
    this.heroesBorrados = this.heroes.shift() || '';
  }
}
