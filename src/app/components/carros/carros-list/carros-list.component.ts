import { Component, inject } from '@angular/core';
import { Carro } from '../../../models/carro';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { CarroService } from '../../../service/carro.service';

@Component({
  selector: 'app-carros-list',
  imports: [RouterLink],
  templateUrl: './carros-list.component.html',
  styleUrl: './carros-list.component.scss',
})
export class CarrosListComponent {
  carroService = inject(CarroService);
  lista: Carro[] = [];

  constructor() {
    this.findAll();
    let carroNovo = history.state.carroNovo;
    let carroEditado = history.state.carroEditado;

    if (carroNovo) {
      carroNovo.id = 555;
      this.lista.push(carroNovo);
    }
    if (carroEditado) {
      let indice = this.lista.findIndex((x) => {
        return x.id == carroEditado.id;
      });
      this.lista[indice] = carroEditado;
    }
  }
  deleteById(carro: Carro) {
    Swal.fire({
      title: 'Tem certeza que deseja deletar esse registro?',
      icon: 'warning',
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
    }).then((result) => {
      if (result.isConfirmed) {
        let indice = this.lista.findIndex((x) => {
          return x.id == carro.id;
        });
        this.lista.splice(indice, 1);
        Swal.fire({
          title: 'Salvo com sucesso!',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
      }
    });
  }
  findAll() {
    this.carroService.findAll().subscribe({
      next: (lista) => {
        // quando o back retornar 200
        this.lista = lista;
      },
      error: (error) => {
        // quando o back retornar error
        alert('Ocorreu algum erro');
      },
    });
  }
}
