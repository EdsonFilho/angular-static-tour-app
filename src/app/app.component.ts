import { Component } from '@angular/core';
import { SoundPlayerService } from './services/sound-player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'tour-player-app';
  currentIcon: string = 'play_arrow';


  constructor(private eventService: SoundPlayerService) { }

  ngOnInit() {
    this.eventService.getObservable().subscribe((event: string) => {
      this.currentIcon = event;
    });
  }

  playerClick() {
    console.log('playerClick');
    switch (this.currentIcon) {
      case 'pause':
        this.eventService.stopAudio();
        break;
      case 'play_arrow':
        this.eventService.playAudio();
        break;
    }
  }
}
