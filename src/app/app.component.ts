import { OverlayContainer } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vendo-todo-me-voy';
  constructor(private overlayContainer: OverlayContainer) {}

  ngOnInit() {
    this.overlayContainer.getContainerElement().classList.add('dark-theme');
    console.log(this.overlayContainer.getContainerElement);

  }
}
