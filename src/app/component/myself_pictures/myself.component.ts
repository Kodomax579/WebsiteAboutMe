import { Component } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { carouselModel } from '../../model/carousel.model';

@Component({
  selector: 'app-myself',
  imports: [Carousel],
  templateUrl: './myself.component.html',
  styleUrl: './myself.component.scss'
})
export class MyselfComponent {
  public carouselData :carouselModel[] = [
    {
      image:"assets/Irland.jpg",
      text:"1 Monatiges Praktikum in Irland"
    },
    {
      image:"assets/Skifahren.jpg",
      text:"Skifahren in Italien"
    },
    {
      image:"assets/Niederlande_boys.jpg",
      text:"Niederlande Uralaub mit Freunden"
    },
    {
      image:"assets/Niederlande.jpg",
      text:"Niederlande Urlaub mit meiner Freundin"
    },
    {
      image:"assets/ITA_Abschluss.jpg",
      text:"Abschluss meines Fachabiturs zum Informationstechnischen Assistenten"
    },
  ]
}
