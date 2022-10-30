import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesListComponent } from './series-list/series-list.component';
import { SeriesRoutingModule } from './series-routing.module';
import { restService } from './rest.service';
import { HttpClientModule } from '@angular/common/http';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';

@NgModule({
  declarations: [
    SeriesListComponent,
    SerieDetailComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    HttpClientModule
  ],
  providers: [restService],
  exports: [SeriesListComponent]
})
export class SeriesModule { }
