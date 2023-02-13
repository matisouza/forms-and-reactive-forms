import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamic',
  templateUrl: './dinamic.component.html',
})
export class DinamicComponent implements OnInit {


  ngOnInit(): void {
    this.persona = {
      nombre: 'Matias',
      favoritos: [
        { id: 1, nombre: 'Rust' },
        { id: 2, nombre: 'Lol' },
      ],
    };
  }

  nuevoJuego: string = '';

  persona!: Persona;

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego,
    };

    this.persona.favoritos.push(nuevoFavorito);
    this.nuevoJuego = '';
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

  guardar() {
    console.log('formulario posteado');
  }
}
