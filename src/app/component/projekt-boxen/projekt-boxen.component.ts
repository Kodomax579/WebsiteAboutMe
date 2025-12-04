import { Component, Input } from '@angular/core';
import { projectModel } from '../../model/project.model';

@Component({
  selector: 'app-projekt-boxen',
  imports: [],
  templateUrl: './projekt-boxen.component.html',
  styleUrl: './projekt-boxen.component.scss',
})
export class ProjektBoxenComponent {
  @Input({required: true}) project?: projectModel;
}
