import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../model/userdetails';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: UserDetails;

  constructor() { }

  ngOnInit(): void {
  }

}
