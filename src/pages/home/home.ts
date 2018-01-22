import { Component } from '@angular/core';
import { NavController, IonicPage, Events } from 'ionic-angular';
import { CatsService } from '../../services/cats-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cats: any = []
  loading = true

  constructor(public navCtrl: NavController, private events: Events,
    private catsService: CatsService) {
    events.subscribe('new-cat', cat => {
      this.cats.push(cat)
    })

    catsService.cats().then(cats => {
      this.loading = false
      this.cats = cats
    })
  }

  catClicked(cat) {
    this.navCtrl.push('AddCatPage', {cat: cat})
  }

  badgeClick(event) {
    event.stopPropagation()
  }

  addCat() {
    this.navCtrl.push('AddCatPage')
  }
}
