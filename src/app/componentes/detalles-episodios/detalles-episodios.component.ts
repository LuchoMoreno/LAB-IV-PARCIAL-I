import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-detalles-episodios',
  templateUrl: './detalles-episodios.component.html',
  styleUrls: ['./detalles-episodios.component.scss']
})
export class DetallesEpisodiosComponent implements OnInit {

  @Input() episodio;


  constructor() { }

  ngOnInit(): void {
    console.log(this.episodio);
  }

}
