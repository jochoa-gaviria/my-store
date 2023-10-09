import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  @Input() img = '';
  @Output() loaded = new EventEmitter<boolean>();
  imgDefault = '/assets/images/404.jpg';

  imgError() {
    this.img = this.imgDefault;
  }

  imgLoaded() {
    this.loaded.emit(this.img != this.imgDefault);
  }
}
