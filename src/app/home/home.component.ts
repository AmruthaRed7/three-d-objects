import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { objects } from '../objects';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  objects=objects;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    //this.dataService.sendGetRequest().subscribe((data: any[]) => {
    //  console.log(data);
    //  this.Objects = data;
    //})
  }


}
