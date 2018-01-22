import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import {FormBuilder, Validators, FormGroup} from '@angular/forms'
import { CatsService } from '../../services/cats-service';

/**
 * Generated class for the AddCatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-cat',
  templateUrl: 'add-cat.html',
})
export class AddCatPage {
  myForm: FormGroup
  cat = null

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private events: Events, fb: FormBuilder, private catsService: CatsService) {
      this.myForm = fb.group({
        // id: [null, [Validators.required]],
        name: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
        color: [null, [Validators.required]],
        age: [null, []]
      })

      this.cat = this.navParams.get('cat')
      if (this.cat != null) {
        this.myForm.patchValue(this.cat)
      }
  }

  ionViewDidLoad() {
    
  }

  save() {
    if (this.myForm.valid) {
      let promise
      if (this.cat == null) {
        promise = this.catsService.addCat(this.myForm.value)
      } else {
        Object.assign(this.cat, this.myForm.value)
        promise = this.catsService.updateCat(this.cat)
      }

      promise.then(cat => {
        if (this.cat == null) {
          this.events.publish('new-cat', cat)
        }
        
        this.navCtrl.pop()
      })
    }
  }
}
