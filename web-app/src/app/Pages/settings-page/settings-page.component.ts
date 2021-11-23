import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
})
export class SettingsPageComponent implements OnInit {
  settingsModalVisible: string = 'flex';
  clickModalVisible: string = 'none';
  AccountDetailsModalVisible: string = 'none';
  RecommendationModalVisible: string = 'none';
  appearanceModalVisible: string = 'none';
  historyModalVisible: string = 'none';
  securityModalVisible: string = 'none';
  helpModalVisible: string = 'none';
  tAndCModalVisible: string = 'none';
  feedbackModalVisible: string = 'none';
  helpUsageModalVisible: string = 'none';
  helpContactModalVisible: string = 'none';
  helpDeleteModalVisible: string = 'none';
  helpCreatePlaylistModalVisible: string = 'none';
  helpShareModalVisible: string = 'none';

  firstName: string = '';
  lastName: string = '';
  phoneNumber: string = '';

  constructor(private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar,
  ) { }

  async ngOnInit() {
    const userInfo = await this.authService.getUserAttributes();
    this.firstName = userInfo.firstName!;
    this.lastName = userInfo.lastName!;
    this.phoneNumber = userInfo.phoneNumber!;
  }

  async onSaveAccountDetails() {
    await this.authService.updateUserAttributes({
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber
    });
    this.snackBar.open('Account details are saved successfully', 'close', { duration: 3000 });
  }

  alertMe = () => {
    alert('I work');
  };

  showSettingsModal = () => {
    // hide the settings modal and show the options modal
  };

  showAccountDetailsModal = () => {
    let accountDetailsPopup = document.getElementById('accountDetailsPopup');
    let mainSettingsModal = document.getElementById('settingsPageModal');
    let clickModal = document.getElementById('clickModal');

    if (this.settingsModalVisible == 'none') {
      // shows the settings modal
      this.settingsModalVisible = 'flex';
      if (mainSettingsModal)
        (mainSettingsModal as HTMLFormElement).style.display = 'flex';
    } else if (this.settingsModalVisible == 'flex') {
      // hides the settings modal
      this.settingsModalVisible = 'none';
      if (mainSettingsModal)
        (mainSettingsModal as HTMLFormElement).style.display = 'none';
    }

    if (this.clickModalVisible == 'none') {
      // shows the click modal
      this.clickModalVisible = 'block';
      if (clickModal) (clickModal as HTMLFormElement).style.display = 'block';
    } else if (this.clickModalVisible == 'block') {
      // hides the click modal
      this.clickModalVisible = 'none';
      if (clickModal) (clickModal as HTMLFormElement).style.display = 'none';
    }

    if (this.AccountDetailsModalVisible == 'none') {
      // shows the appearance modal
      this.AccountDetailsModalVisible = 'flex';
      if (accountDetailsPopup)
        (accountDetailsPopup as HTMLFormElement).style.display = 'flex';
    } else if (this.AccountDetailsModalVisible == 'flex') {
      // hides the appearance modal
      this.AccountDetailsModalVisible = 'none';
      if (accountDetailsPopup)
        (accountDetailsPopup as HTMLFormElement).style.display = 'none';
    }
  };

  showRecommendationModal = () => {
    let recommendationsPopup = document.getElementById(
      'recommendatioPreferencesPopup'
    );
    let mainSettingsModal = document.getElementById('settingsPageModal');
    let clickModal = document.getElementById('clickModal');

    if (this.settingsModalVisible == 'none') {
      // shows the settings modal
      this.settingsModalVisible = 'flex';
      if (mainSettingsModal)
        (mainSettingsModal as HTMLFormElement).style.display = 'flex';
    } else if (this.settingsModalVisible == 'flex') {
      // hides the settings modal
      this.settingsModalVisible = 'none';
      if (mainSettingsModal)
        (mainSettingsModal as HTMLFormElement).style.display = 'none';
    }

    if (this.clickModalVisible == 'none') {
      // shows the click modal
      this.clickModalVisible = 'block';
      if (clickModal) (clickModal as HTMLFormElement).style.display = 'block';
    } else if (this.clickModalVisible == 'block') {
      // hides the click modal
      this.clickModalVisible = 'none';
      if (clickModal) (clickModal as HTMLFormElement).style.display = 'none';
    }

    if (this.RecommendationModalVisible == 'none') {
      // shows the appearance modal
      this.RecommendationModalVisible = 'flex';
      if (recommendationsPopup)
        (recommendationsPopup as HTMLFormElement).style.display = 'flex';
    } else if (this.RecommendationModalVisible == 'flex') {
      // hides the appearance modal
      this.RecommendationModalVisible = 'none';
      if (recommendationsPopup)
        (recommendationsPopup as HTMLFormElement).style.display = 'none';
    }
  };

  showAppearanceModal = () => {
    let appearancePopUp = document.getElementById('appearancePopup');
    let mainSettingsModal = document.getElementById('settingsPageModal');
    let clickModal = document.getElementById('clickModal');

    if (this.settingsModalVisible == 'none') {
      // shows the settings modal
      this.settingsModalVisible = 'flex';
      if (mainSettingsModal)
        (mainSettingsModal as HTMLFormElement).style.display = 'flex';
    } else if (this.settingsModalVisible == 'flex') {
      // hides the settings modal
      this.settingsModalVisible = 'none';
      if (mainSettingsModal)
        (mainSettingsModal as HTMLFormElement).style.display = 'none';
    }

    if (this.clickModalVisible == 'none') {
      // shows the click modal
      this.clickModalVisible = 'block';
      if (clickModal) (clickModal as HTMLFormElement).style.display = 'block';
    } else if (this.clickModalVisible == 'block') {
      // hides the click modal
      this.clickModalVisible = 'none';
      if (clickModal) (clickModal as HTMLFormElement).style.display = 'none';
    }

    if (this.appearanceModalVisible == 'none') {
      // shows the appearance modal
      this.appearanceModalVisible = 'flex';
      if (appearancePopUp)
        (appearancePopUp as HTMLFormElement).style.display = 'flex';
    } else if (this.appearanceModalVisible == 'flex') {
      // hides the appearance modal
      this.appearanceModalVisible = 'none';
      if (appearancePopUp)
        (appearancePopUp as HTMLFormElement).style.display = 'none';
    }
  };

  showHistoryModal = () => {
    let historyPopUp = document.getElementById('historyPopup');
    let mainSettingsModal = document.getElementById('settingsPageModal');
    let clickModal = document.getElementById('clickModal');

    if (this.settingsModalVisible == 'none') {
      // shows the settings modal
      this.settingsModalVisible = 'flex';
      if (mainSettingsModal)
        (mainSettingsModal as HTMLFormElement).style.display = 'flex';
    } else if (this.settingsModalVisible == 'flex') {
      // hides the settings modal
      this.settingsModalVisible = 'none';
      if (mainSettingsModal)
        (mainSettingsModal as HTMLFormElement).style.display = 'none';
    }

    if (this.clickModalVisible == 'none') {
      // shows the click modal
      this.clickModalVisible = 'block';
      if (clickModal) (clickModal as HTMLFormElement).style.display = 'block';
    } else if (this.clickModalVisible == 'block') {
      // hides the click modal
      this.clickModalVisible = 'none';
      if (clickModal) (clickModal as HTMLFormElement).style.display = 'none';
    }

    if (this.historyModalVisible == 'none') {
      // shows the appearance modal
      this.historyModalVisible = 'flex';
      if (historyPopUp)
        (historyPopUp as HTMLFormElement).style.display = 'flex';
    } else if (this.historyModalVisible == 'flex') {
      // hides the appearance modal
      this.historyModalVisible = 'none';
      if (historyPopUp)
        (historyPopUp as HTMLFormElement).style.display = 'none';
    }
  };

  showSecurityModal = () => {
    let securityPopup = document.getElementById('securityPopup');
    let mainSettingsModal = document.getElementById('settingsPageModal');
    let clickModal = document.getElementById('clickModal');

    if (this.settingsModalVisible == 'none') {
      // shows the settings modal
      this.settingsModalVisible = 'flex';
      if (mainSettingsModal)
        (mainSettingsModal as HTMLFormElement).style.display = 'flex';
    } else if (this.settingsModalVisible == 'flex') {
      // hides the settings modal
      this.settingsModalVisible = 'none';
      if (mainSettingsModal)
        (mainSettingsModal as HTMLFormElement).style.display = 'none';
    }

    if (this.clickModalVisible == 'none') {
      // shows the click modal
      this.clickModalVisible = 'block';
      if (clickModal) (clickModal as HTMLFormElement).style.display = 'block';
    } else if (this.clickModalVisible == 'block') {
      // hides the click modal
      this.clickModalVisible = 'none';
      if (clickModal) (clickModal as HTMLFormElement).style.display = 'none';
    }

    if (this.securityModalVisible == 'none') {
      // shows the appearance modal
      this.securityModalVisible = 'flex';
      if (securityPopup)
        (securityPopup as HTMLFormElement).style.display = 'flex';
    } else if (this.securityModalVisible == 'flex') {
      // hides the appearance modal
      this.securityModalVisible = 'none';
      if (securityPopup)
        (securityPopup as HTMLFormElement).style.display = 'none';
    }
  };

  showHelpModal = () => {
    let showHelpPopUp = document.getElementById('helpPopup');
    let mainSettingsModal = document.getElementById('settingsPageModal');
    let clickModal = document.getElementById('clickModal');

    if (this.settingsModalVisible == 'none') {
      // shows the settings modal
      this.settingsModalVisible = 'flex';
      if (mainSettingsModal)
        (mainSettingsModal as HTMLFormElement).style.display = 'flex';
    } else if (this.settingsModalVisible == 'flex') {
      // hides the settings modal
      this.settingsModalVisible = 'none';
      if (mainSettingsModal)
        (mainSettingsModal as HTMLFormElement).style.display = 'none';
    }

    if (this.clickModalVisible == 'none') {
      // shows the click modal
      this.clickModalVisible = 'block';
      if (clickModal) (clickModal as HTMLFormElement).style.display = 'block';
    } else if (this.clickModalVisible == 'block') {
      // hides the click modal
      this.clickModalVisible = 'none';
      if (clickModal) (clickModal as HTMLFormElement).style.display = 'none';
    }

    if (this.helpModalVisible == 'none') {
      // shows the appearance modal
      this.helpModalVisible = 'flex';
      if (showHelpPopUp)
        (showHelpPopUp as HTMLFormElement).style.display = 'flex';
    } else if (this.helpModalVisible == 'flex') {
      // hides the appearance modal
      this.helpModalVisible = 'none';
      if (showHelpPopUp)
        (showHelpPopUp as HTMLFormElement).style.display = 'none';
    }
  };

  showTAndCModal = () => {
    let showTAndCPopUp = document.getElementById('termsAndConditionsPopup');
    let mainSettingsModal = document.getElementById('settingsPageModal');
    let clickModal = document.getElementById('clickModal');

    if (this.settingsModalVisible == 'none') {
      // shows the settings modal
      this.settingsModalVisible = 'flex';
      if (mainSettingsModal)
        (mainSettingsModal as HTMLFormElement).style.display = 'flex';
    } else if (this.settingsModalVisible == 'flex') {
      // hides the settings modal
      this.settingsModalVisible = 'none';
      if (mainSettingsModal)
        (mainSettingsModal as HTMLFormElement).style.display = 'none';
    }

    if (this.clickModalVisible == 'none') {
      // shows the click modal
      this.clickModalVisible = 'block';
      if (clickModal) (clickModal as HTMLFormElement).style.display = 'block';
    } else if (this.clickModalVisible == 'block') {
      // hides the click modal
      this.clickModalVisible = 'none';
      if (clickModal) (clickModal as HTMLFormElement).style.display = 'none';
    }

    if (this.tAndCModalVisible == 'none') {
      // shows the appearance modal
      this.tAndCModalVisible = 'flex';
      if (showTAndCPopUp)
        (showTAndCPopUp as HTMLFormElement).style.display = 'flex';
    } else if (this.tAndCModalVisible == 'flex') {
      // hides the appearance modal
      this.tAndCModalVisible = 'none';
      if (showTAndCPopUp)
        (showTAndCPopUp as HTMLFormElement).style.display = 'none';
    }
  };

  showFeedbackModal = () => {
    let showFeedbackModal = document.getElementById('feedbackPopup');
    let mainSettingsModal = document.getElementById('settingsPageModal');
    let clickModal = document.getElementById('clickModal');

    if (this.settingsModalVisible == 'none') {
      // shows the settings modal
      this.settingsModalVisible = 'flex';
      if (mainSettingsModal)
        (mainSettingsModal as HTMLFormElement).style.display = 'flex';
    } else if (this.settingsModalVisible == 'flex') {
      // hides the settings modal
      this.settingsModalVisible = 'none';
      if (mainSettingsModal)
        (mainSettingsModal as HTMLFormElement).style.display = 'none';
    }

    if (this.clickModalVisible == 'none') {
      // shows the click modal
      this.clickModalVisible = 'block';
      if (clickModal) (clickModal as HTMLFormElement).style.display = 'block';
    } else if (this.clickModalVisible == 'block') {
      // hides the click modal
      this.clickModalVisible = 'none';
      if (clickModal) (clickModal as HTMLFormElement).style.display = 'none';
    }

    if (this.feedbackModalVisible == 'none') {
      // shows the appearance modal
      this.feedbackModalVisible = 'flex';
      if (showFeedbackModal)
        (showFeedbackModal as HTMLFormElement).style.display = 'flex';
    } else if (this.feedbackModalVisible == 'flex') {
      // hides the appearance modal
      this.feedbackModalVisible = 'none';
      if (showFeedbackModal)
        (showFeedbackModal as HTMLFormElement).style.display = 'none';
    }
  };

  showHelpUsageModal = () => {
    let showHelpUsageModal = document.getElementById('helpUsagePopup');
    let mainHelpModal = document.getElementById('helpPopup');

    if (this.helpModalVisible == 'none') {
      // shows the help modal
      this.helpModalVisible = 'flex';
      if (mainHelpModal)
        (mainHelpModal as HTMLFormElement).style.display = 'flex';
    } else if (this.helpModalVisible == 'flex') {
      // hides the help modal
      this.helpModalVisible = 'none';
      if (mainHelpModal)
        (mainHelpModal as HTMLFormElement).style.display = 'none';
    }

    if (this.helpUsageModalVisible == 'none') {
      // shows the help usage modal
      this.helpUsageModalVisible = 'flex';
      if (showHelpUsageModal)
        (showHelpUsageModal as HTMLFormElement).style.display = 'flex';
    } else if (this.helpUsageModalVisible == 'flex') {
      // hides the help usage modal
      this.helpUsageModalVisible = 'none';
      if (showHelpUsageModal)
        (showHelpUsageModal as HTMLFormElement).style.display = 'none';
    }
  }

  showHelpContactModal = () => {
    let showHelpContactModal = document.getElementById('helpContactPopup');
    let mainHelpModal = document.getElementById('helpPopup');

    if (this.helpModalVisible == 'none') {
      // shows the help modal
      this.helpModalVisible = 'flex';
      if (mainHelpModal)
        (mainHelpModal as HTMLFormElement).style.display = 'flex';
    } else if (this.helpModalVisible == 'flex') {
      // hides the help modal
      this.helpModalVisible = 'none';
      if (mainHelpModal)
        (mainHelpModal as HTMLFormElement).style.display = 'none';
    }

    if (this.helpContactModalVisible == 'none') {
      // shows the help contact modal
      this.helpContactModalVisible = 'flex';
      if (showHelpContactModal)
        (showHelpContactModal as HTMLFormElement).style.display = 'flex';
    } else if (this.helpContactModalVisible == 'flex') {
      // hides the help contact modal
      this.helpContactModalVisible = 'none';
      if (showHelpContactModal)
        (showHelpContactModal as HTMLFormElement).style.display = 'none';
    }
  }

  showHelpDeleteModal = () => {
    let showHelpDeleteModal = document.getElementById('helpDeletePopup');
    let mainHelpModal = document.getElementById('helpPopup');

    if (this.helpModalVisible == 'none') {
      // shows the help modal
      this.helpModalVisible = 'flex';
      if (mainHelpModal)
        (mainHelpModal as HTMLFormElement).style.display = 'flex';
    } else if (this.helpModalVisible == 'flex') {
      // hides the help modal
      this.helpModalVisible = 'none';
      if (mainHelpModal)
        (mainHelpModal as HTMLFormElement).style.display = 'none';
    }

    if (this.helpDeleteModalVisible == 'none') {
      // shows the help delete modal
      this.helpDeleteModalVisible = 'flex';
      if (showHelpDeleteModal)
        (showHelpDeleteModal as HTMLFormElement).style.display = 'flex';
    } else if (this.helpDeleteModalVisible == 'flex') {
      // hides the help delete modal
      this.helpDeleteModalVisible = 'none';
      if (showHelpDeleteModal)
        (showHelpDeleteModal as HTMLFormElement).style.display = 'none';
    }
  }

  showHelpCreatePlaylistModal = () => {
    let showHelpCreatePlaylistModal = document.getElementById('helpCreatePlaylistPopup');
    let mainHelpModal = document.getElementById('helpPopup');

    if (this.helpModalVisible == 'none') {
      // shows the help modal
      this.helpModalVisible = 'flex';
      if (mainHelpModal)
        (mainHelpModal as HTMLFormElement).style.display = 'flex';
    } else if (this.helpModalVisible == 'flex') {
      // hides the help modal
      this.helpModalVisible = 'none';
      if (mainHelpModal)
        (mainHelpModal as HTMLFormElement).style.display = 'none';
    }

    if (this.helpCreatePlaylistModalVisible == 'none') {
      // shows the help create playlist modal
      this.helpCreatePlaylistModalVisible = 'flex';
      if (showHelpCreatePlaylistModal)
        (showHelpCreatePlaylistModal as HTMLFormElement).style.display = 'flex';
    } else if (this.helpCreatePlaylistModalVisible == 'flex') {
      // hides the help create playlist modal
      this.helpCreatePlaylistModalVisible = 'none';
      if (showHelpCreatePlaylistModal)
        (showHelpCreatePlaylistModal as HTMLFormElement).style.display = 'none';
    }
  }

  showHelpShareModal = () => {
    let showHelpShareModal = document.getElementById('helpSharePopup');
    let mainHelpModal = document.getElementById('helpPopup');

    if (this.helpModalVisible == 'none') {
      // shows the help modal
      this.helpModalVisible = 'flex';
      if (mainHelpModal)
        (mainHelpModal as HTMLFormElement).style.display = 'flex';
    } else if (this.helpModalVisible == 'flex') {
      // hides the help modal
      this.helpModalVisible = 'none';
      if (mainHelpModal)
        (mainHelpModal as HTMLFormElement).style.display = 'none';
    }

    if (this.helpShareModalVisible == 'none') {
      // shows the help share modal
      this.helpShareModalVisible = 'flex';
      if (showHelpShareModal)
        (showHelpShareModal as HTMLFormElement).style.display = 'flex';
    } else if (this.helpShareModalVisible == 'flex') {
      // hides the help share modal
      this.helpShareModalVisible = 'none';
      if (showHelpShareModal)
        (showHelpShareModal as HTMLFormElement).style.display = 'none';
    }
  }

  signOutFromSettings = () => {
    this.router.navigate(['/landing-page']);
  };


}
