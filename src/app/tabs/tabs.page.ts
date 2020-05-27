import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSearch(event) {
    const query = event.target.value.toLowerCase();
    console.log(query);
  }

}
