import { Component, OnInit } from '@angular/core';
import { restService } from '../rest.service';
import { Serie } from '../serie';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  series: any;
  selectedSerie: any = new Serie(0, "", "", 0, "", "","");;
  serie_id: number = 1;
  avarage: number = 0;

  constructor(private restService: restService) { }

  getSeries(): void {
    this.restService.getSeries().subscribe(series => {this.series = series; this.selectedSerie = this.series[0];this.getAvarage();});
  }

  getAvarage(): void {
    for (let serie of this.series) {
      this.avarage += serie.seasons;
    }
    this.avarage = this.avarage / this.series.length;
    document.getElementById("avarage")!.innerHTML = "Seasons average: " + String(this.avarage);
  }

  ngOnInit() {
    this.getSeries();
  }

  onSelected(serie_id: number): void {
    this.serie_id = serie_id;
    this.selectedSerie = this.series[serie_id-1];
  }

}
