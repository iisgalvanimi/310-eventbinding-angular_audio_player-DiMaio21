import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '310-eventbinding-angular_audio_player-DiMaio21';
  audio: HTMLAudioElement;
   duration: number = 0;


  playAudio() {
  this. duration = this.audio.duration
  this.audio.load(); 
  this.audio.play();
  }

  stopAudio() {
    this.audio.pause()
  }
  constructor()  {}


  ngOnInit() {
  this. audio = new Audio(); 
  //this.audio.src = "../assets/mixkit-arcade-retro-game-over-213.wav"; 
  this.audio.src = "../assets/Splash.mp3"
  }
}