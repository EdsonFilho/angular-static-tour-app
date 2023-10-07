import { Component } from '@angular/core';
import { SoundPlayerService } from '../services/sound-player.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './catacombs.component.html',
  styleUrls: ['./catacombs.component.sass']
})
export class CatacombsComponent {
  constructor(public soundPlayer: SoundPlayerService) {
    console.log('CatacombsComponent initialized.');
    soundPlayer.setAudio('assets/catacombs.mp3');
  }

  
  // Method to stop audio when navigating away from the page
  stopAudioOnNavigation() {
    this.soundPlayer.stopAudio();
  }

  ngOnDestroy() {
    console.log('PlaylistComponent destroyed.');

    // Call the stopAudio method when the component is destroyed (navigated away)
    this.soundPlayer.stopAudio();
  }
}
