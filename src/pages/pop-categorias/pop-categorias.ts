import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-pop-categorias",
  templateUrl: "pop-categorias.html"
})
export class PopCategoriasPage {
  list = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    const data = this.navParams.data;
    for (let i = 0; i < Object.keys(data).length - 2; i++) {
      this.list.push(data[i]);
    }
  }
  close(index) {
    this.viewCtrl.dismiss({ index });
  }
}
