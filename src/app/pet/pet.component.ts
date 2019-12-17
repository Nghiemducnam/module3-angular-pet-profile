import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  petName = 'pipi';
  petImage= 'https://www.thukieng.com/wp-content/uploads/2018/08/gia-mua-ban-cho-phoc-soc-thukieng-12.jpg';

  constructor() { }

  updateName(name){
    this.petName = name;
  }

  updateImage(image){
    this.petImage = image;
  }

  ngOnInit() {
  }

}
