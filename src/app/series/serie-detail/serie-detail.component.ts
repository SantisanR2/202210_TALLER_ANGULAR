import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serie } from '../serie';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  @Input() serie: Serie = new Serie(0, "", "", 0, "", "","");

}
