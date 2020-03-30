import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile = {
    id: 1,
    name: 'Ibam',
    flag: 'asdf',
    area: 12,
    population: 2
  };


  constructor() { }

  ngOnInit(): void {
  }

}
