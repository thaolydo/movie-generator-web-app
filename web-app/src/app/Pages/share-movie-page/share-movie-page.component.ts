import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-movie-page',
  templateUrl: './share-movie-page.component.html',
  styleUrls: ['./share-movie-page.component.scss'],
})
export class ShareMoviePageComponent implements OnInit {
  receiverName: string = '';
  receiverEmail: string = '';

  settingsModalVisible: string = 'flex';
  clickModalVisible: string = 'none';
  shareMovieSentModalVisible: string = 'none';

  constructor() {}

  ngOnInit(): void {}

  showShareMovieSentModal = () => {
    let shareMovieSentPopup = document.getElementById('shareMovieSentOuterModal');
    let mainShareModal = document.getElementById('shareMoviePageModal');
    let clickModal = document.getElementById('clickModal');

    if (this.settingsModalVisible == 'none') {
      // shows the settings modal
      this.settingsModalVisible = 'flex';
      if (mainShareModal)
        (mainShareModal as HTMLFormElement).style.display = 'flex';
    } else if (this.settingsModalVisible == 'flex') {
      // hides the settings modal
      this.settingsModalVisible = 'none';
      if (mainShareModal)
        (mainShareModal as HTMLFormElement).style.display = 'none';
    }

    

    if (this.shareMovieSentModalVisible == 'none') {
      // shows the appearance modal
      this.shareMovieSentModalVisible = 'flex';
      if (shareMovieSentPopup)
        (shareMovieSentPopup as HTMLFormElement).style.display = 'flex';
    } else if (this.shareMovieSentModalVisible == 'flex') {
      // hides the appearance modal
      this.shareMovieSentModalVisible = 'none';
      if (shareMovieSentPopup)
        (shareMovieSentPopup as HTMLFormElement).style.display = 'none';
    }
  };
}
