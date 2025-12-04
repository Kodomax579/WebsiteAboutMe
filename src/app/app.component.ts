import { Component } from '@angular/core';
import { MyselfComponent } from "./component/myself_pictures/myself.component";
import { NavbarComponent } from "./component/navbar/navbar.component";
import { TextAboutMeComponent } from "./component/text-about-me/text-about-me.component";
import { ProjekteComponent } from "./component/projekte/projekte.component";

@Component({
  selector: 'app-root',
  imports: [MyselfComponent, NavbarComponent, TextAboutMeComponent, ProjekteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'WebsiteAboutMe';
}
