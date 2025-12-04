import { Component } from '@angular/core';
import { projectModel } from '../../model/project.model';
import { ProjektBoxenComponent } from "../projekt-boxen/projekt-boxen.component";

@Component({
  selector: 'app-projekte',
  imports: [ProjektBoxenComponent],
  templateUrl: './projekte.component.html',
  styleUrl: './projekte.component.scss',
})
export class ProjekteComponent {

  public projects : projectModel[] = [
    {
      Link: "https://github.com/Kodomax579/Getraenkeautomat",
      projectName: "Getränkeautomat",
      beschreibung: "Ein Getränkeautomat Programmiert mit C# als Backend und Angular als Frontend."
    },
    {
      Link: "https://github.com/Kodomax579/License",
      projectName: "License",
      beschreibung: "Ein Lizenz überprüfer um herauszufinden, welche Lizenz eine Projekt benutzt."
    },
    {
      Link: "https://github.com/Kodomax579/Kontoverwatlung",
      projectName: "Kontoverwaltung",
      beschreibung: "Eine Kontoverwaltung programmiert in C# mit einer SQL Datenbank."
    },
    {
      Link: "https://github.com/Kodomax579/WerWirdMillionaer",
      projectName: "WerWirdMillionaer",
      beschreibung: "Ein WerWirdMillionaer Spiel programmiert in C#."
    }
  ]

}
