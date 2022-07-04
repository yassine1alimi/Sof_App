import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides = [
    {'image': 'assets/img/sofrecomtunisie.jpg'}, 
    {'image': 'assets/img/sofrecomtunisie.jpg'},
    {'image': 'assets/img/sofrecomtunisie.jpg'}
  ];

  constructor() { }

  ngOnInit() {
    
    }
  }

 
