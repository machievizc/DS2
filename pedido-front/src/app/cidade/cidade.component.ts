import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../_services/cidade.service';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.scss'],
})
export class CidadeComponent implements OnInit {
  public displayedColumns: string[] = ['nome', 'uf', 'options'];
  public cidades: Array<any>;
  public dataSourceCidades;

  public errorMessage: string;
  public loading: boolean;

  constructor(private cidadeService: CidadeService) {}

  ngOnInit(): void {
    this.dataSourceCidades = this.cidades;
    this.getCidades();
  }

  public async getCidades() {
    this.cidadeService.listarTodos().subscribe(
      (result) => {
        this.cidades = result as [];
        this.loading = false;
      },
      (error) => {
        this.errorMessage =
          error.status == 0
            ? 'Não foi possível conectar ao servidor'
            : error.message;
        this.loading = false;
      }
    );
  }
}
