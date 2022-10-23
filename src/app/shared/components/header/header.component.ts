import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EventType } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toogle: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.toogle.emit();
  }
}
