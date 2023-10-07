import { Component } from '@angular/core';
import { SoundPlayerService } from '../services/sound-player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  constructor(public soundPlayer: SoundPlayerService) {
    console.log('HomeComponent initialized.');
    soundPlayer.setAudio('assets/welcome.mp3');
  }

    // Method to stop audio when navigating away from the page
    stopAudioOnNavigation() {
      this.soundPlayer.stopAudio();
    }

    ngOnDestroy() {
      console.log('HomeComponent destroyed.');

      // Call the stopAudio method when the component is destroyed (navigated away)
      this.soundPlayer.stopAudio();
    }
}
