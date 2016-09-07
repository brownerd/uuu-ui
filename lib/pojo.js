'use babel';

// Populate plain-ol-javascript-object
// to normailze data and set all styles on every run

export default function(value) {
  return {
    reset: value.newValue.resetAllStyles.reset,
    zero: value.newValue.resetAllStyles.zero,
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
// Settings page styles
      {
        sassvar: "@settings-bg-style",
        value: value.newValue.settingsPage.background,
      },
      {
        sassvar: "@settings-nav",
        value: value.newValue.settingsPage.nav,
      },
      {
        sassvar: "@settings-border",
        value: value.newValue.settingsPage.border,
      },
    ]
  }
}
