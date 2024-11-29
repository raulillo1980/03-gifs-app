import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!:string;

  @Input()
  public alt!:string;

  public hasLoaded: boolean=false;

  ngOnInit(): void {
    if (!this.url) throw new Error('No tiene url');

  }

  onLoad(){
    setTimeout(() => {
      this.hasLoaded=true;
    }, 2000);
    //console.log('Image Loaded');
      this.hasLoaded=true;
  }

}
