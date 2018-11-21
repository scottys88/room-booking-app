import { Component, OnInit } from '@angular/core';
import { ROOMS } from '../mock-rooms';

@Component({
  selector: 'app-room-select',
  templateUrl: './room-select.component.html',
  styleUrls: ['./room-select.component.scss']
})
export class RoomSelectComponent implements OnInit {

  rooms  =  ROOMS;



  constructor() { }

  ngOnInit() {
  }

}
