import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
})
export class SettingsPageComponent implements OnInit {
  settingsModalVisible: string = 'block';
  clickModalVisible: string = 'none';
  AccountDetailsModalVisible: string = 'none';
  RecommendationModalVisible: string = 'none';
  appearanceModalVisible: string = 'none';
  historyModalVisible: string = 'none';
  securityModalVisible: string = 'none';
  showHelpModalVisible: string = 'none';

  constructor() {}

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
      this.settingsModalVisible = 'block';
      if (mainSettingsModal)
        (mainSettingsModal as HTMLFormElement).style.display = 'block';
    } else if (this.settingsModalVisible == 'block') {
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
      this.settingsModalVisible = 'block';
      if (mainSettingsModal)
        (mainSettingsModal as HTMLFormElement).style.display = 'block';
    } else if (this.settingsModalVisible == 'block') {
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
      this.settingsModalVisible = 'block';
      if (mainSettingsModal)
        (mainSettingsModal as HTMLFormElement).style.display = 'block';
    } else if (this.settingsModalVisible == 'block') {
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
      this.settingsModalVisible = 'block';
      if (mainSettingsModal)
        (mainSettingsModal as HTMLFormElement).style.display = 'block';
    } else if (this.settingsModalVisible == 'block') {
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
  }

  showSecurityModal = () => {
    let securityPopup = document.getElementById('securityPopup');
    let mainSettingsModal = document.getElementById('settingsPageModal');
    let clickModal = document.getElementById('clickModal');

    if (this.settingsModalVisible == 'none') {
      // shows the settings modal
      this.settingsModalVisible = 'block';
      if (mainSettingsModal)
        (mainSettingsModal as HTMLFormElement).style.display = 'block';
    } else if (this.settingsModalVisible == 'block') {
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
  }

  showHelpModal = () => {
    let showHelpPopUp = document.getElementById('helpPopup');
    let mainSettingsModal = document.getElementById('settingsPageModal');
    let clickModal = document.getElementById('clickModal');

    if (this.settingsModalVisible == 'none') {
      // shows the settings modal
      this.settingsModalVisible = 'block';
      if (mainSettingsModal)
        (mainSettingsModal as HTMLFormElement).style.display = 'block';
    } else if (this.settingsModalVisible == 'block') {
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

    if (this.showHelpModalVisible == 'none') {
      // shows the appearance modal
      this.showHelpModalVisible = 'flex';
      if (showHelpPopUp)
        (showHelpPopUp as HTMLFormElement).style.display = 'flex';
    } else if (this.showHelpModalVisible == 'flex') {
      // hides the appearance modal
      this.showHelpModalVisible = 'none';
      if (showHelpPopUp)
        (showHelpPopUp as HTMLFormElement).style.display = 'none';
    }
  }
}
