import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrls: ['./gifs-card.component.css']
})


 export class GifsCardComponent implements OnInit{

   @Input()
   public lista!:Gif;



   ngOnInit():void {
     if (!this.lista) throw new Error('Method not implemented.');
     //console.log(this.lista.title);
   }
}
