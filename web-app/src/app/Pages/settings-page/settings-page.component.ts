import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit(): void {}

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

  signOutFromSettings = () => {
    this.router.navigate(['/landing-page']);
  };

 
}
