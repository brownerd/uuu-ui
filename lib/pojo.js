'use babel';

// Populate plain-ol-javascript-object
// to normailze data and set all styles on every run

export default function(value) {
  return {
    reset: value.newValue.resetAllStyles.reset,
    settings: [
// Text color and value
      {
        sassvar: "@text-color",
        value: value.newValue.text.color.toRGBAString(),
      },
      {
        sassvar: "@value-text-color",
        value: value.newValue.text.value,
      },
// Heading color and value
      {
        sassvar: "@heading-color",
        value: value.newValue.heading.color.toRGBAString(),
      },
      {
        sassvar: "@value-heading-color",
        value: value.newValue.heading.value,
      },
// Background color and value
      {
        sassvar: "@background-color",
        value: value.newValue.background.color.toRGBAString(),
      },
      {
        sassvar: "@value-background-color",
        value: value.newValue.background.value,
      },
// Button color and value
      {
        sassvar: "@button-color",
        value: value.newValue.button.color.toRGBAString(),
      },
      {
        sassvar: "@value-button-color",
        value: value.newValue.button.value,
      },
// Border color value
      {
        sassvar: "@value-border-color",
        value: value.newValue.border.value,
      },
// Nav value - this the treeView and tabBar
      {
        sassvar: "@value-nav",
        value: value.newValue.nav.value,
      },
// Find and replace border highlight color
      {
        sassvar: "@find-and-replace-border-highlight-color",
        value: value.newValue.findAndReplace.borderHighLightColor.toRGBAString(),
      },
      {
        sassvar: "@find-and-replace-current-border-highlight-color",
        value: value.newValue.findAndReplace.borderHighLightColorCurrent.toRGBAString(),
      },
// Git colors color
      {
        sassvar: "@info-color",
        value: value.newValue.git.infoColor.toRGBAString(),
      },
      {
        sassvar: "@success-color",
        value: value.newValue.git.successColor.toRGBAString(),
      },
      {
        sassvar: "@warning-color",
        value: value.newValue.git.warningColor.toRGBAString(),
      },
      {
        sassvar: "@error-color",
        value: value.newValue.git.errorColor.toRGBAString(),
      },
      {
        sassvar: "@settings-bg-style",
        value: value.newValue.settingsBackground.style,
      },
    ]
  }
}


// @text-color: rgba(145, 145, 145, 1);
// @value-text-color: 0;
// @heading-color: rgba(33, 33, 33, 1);
// @value-heading-color: 0;
// @background-color: rgba(94, 94, 94, 1);
// @value-background-color: 0;
// @button-color: rgba(0, 250, 93, 1);
// @value-button-color: 0;
// @value-border-color: -25;
// @value-nav: -30;
// @find-and-replace-border-highlight-color: rgba(255, 255, 255, 1);
// @find-and-replace-current-border-highlight-color: rgba(0, 255, 102, 1);
// @info-color: rgba(0, 170, 255, 1);
// @success-color: rgba(0, 255, 102, 1);
// @warning-color: rgba(255, 213, 0, 1);
// @error-color: rgba(255, 0, 0, 1);
// @settings-bg-style: pinstripe;


// atom.config.set('uuu-ui.text.color, 'rgba(145, 145, 145, 1)')
// atom.config.set('uuu-ui.text.value, '0')
// atom.config.set('uuu-ui.heading.color, 'rgba(33, 33, 33, 1)')
// atom.config.set('uuu-ui.heading.value, '0')
// atom.config.set('uuu-ui.background.color, 'rgba(94, 94, 94, 1)')
// atom.config.set('uuu-ui.background.value, '0')
// atom.config.set('uuu-ui.button.color, 'rgba(0, 250, 93, 1)')
// atom.config.set('uuu-ui.button.value, '0')
// atom.config.set('uuu-ui.border.value, '-25')
// atom.config.set('uuu-ui.nav.value, '-30')
// atom.config.set('uuu-ui.findAndReplace.borderHighLightColor, 'rgba(255, 255, 255, 1)')
// atom.config.set('uuu-ui.findAndReplace.borderHighLightColorCurrent, 'rgba(0, 255, 102, 1)')
// atom.config.set('uuu-ui.git.infoColor, 'rgba(0, 170, 255, 1)')
// atom.config.set('uuu-ui.git.successColor, 'rgba(0, 255, 102, 1)')
// atom.config.set('uuu-ui.git.warningColor, 'rgba(255, 213, 0, 1)')
// atom.config.set('uuu-ui.git.errorColor, 'rgba(255, 0, 0, 1)')
// atom.config.set('uuu-ui.settingsBackground.style, 'pinstripe')


// #TODO:0 Presets
// TODO:10 saving styles
// TODO:20 sharing styles

// How to make presets
//  function makePreset
//    - take current uuu.less stylesheet
//    - make new function of atom.config.set()s
//    - export this function
//    - Object.assign this function to



// Save function
//  - write uuu.less to a function file in a function styles directory
//  - add config to give style a name
//  - have a function that builds


// - Send function to the cloud
// -  Send a screenshot too


// Does seralizing help?
