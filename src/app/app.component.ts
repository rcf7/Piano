import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Piano';


aplicarSonido(numero: number) {
  console.log(numero)
  const audio = new Audio();
  audio.src = ('./../assets/sonidos/Sonido' + numero + '.mp3');
  audio.load();
  audio.play();
  /* vamos peludoooo! */
}   


}
