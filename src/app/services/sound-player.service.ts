import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SoundPlayerService {
  private audio = new Audio('assets/welcome.mp3');
  private eventSubject: BehaviorSubject<string> = new BehaviorSubject<string>('play_arrow');
  
  constructor() {
   }


  setAudio(audioUri : string){
    this.audio = new Audio(audioUri);
    let eventSubject = this.eventSubject;
    this.audio.onended = function() {
      eventSubject.next('play_arrow');
    };
  }

  playAudio() {
    console.log('playAudio');
    this.audio.play();
    this.eventSubject.next('pause');
  }

  pauseAudio() {
    console.log('pauseAudio');
    if (this.audio) {
      this.audio.pause();
      this.eventSubject.next('play_arrow');
    }
  }

  stopAudio() {
    console.log('stopAudio');
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.eventSubject.next('play_arrow');
    }
  }

  getObservable(): Observable<string> {
    return this.eventSubject.asObservable();
  }
}
