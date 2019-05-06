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
        sassvar: "@text-value",
        value: value.newValue.text.value,
      },
// Heading color and value
      {
        sassvar: "@heading-color",
        value: value.newValue.heading.color.toRGBAString(),
      },
      {
        sassvar: "@heading-value",
        value: value.newValue.heading.value,
      },
// Background color and value
      {
        sassvar: "@background-color",
        value: value.newValue.background.color.toRGBAString(),
      },
      {
        sassvar: "@background-value",
        value: value.newValue.background.value,
      },
      // Nav value - this the treeView and tabBar
      {
        sassvar: "@background-navvalue",
        value: value.newValue.background.navvalue,
      },
// Button color and value
      {
        sassvar: "@button-color",
        value: value.newValue.button.color.toRGBAString(),
      },
      {
        sassvar: "@button-value",
        value: value.newValue.button.value,
      },
      {
        sassvar: "@button-textcolor",
        value: value.newValue.button.textcolor,
      },
// Border color value
      {
        sassvar: "@border-value",
        value: value.newValue.border.value,
      },
      {
        sassvar: "@border-radius",
        value: value.newValue.border.radius,
      },
// Find and replace border highlight color
      {
        sassvar: "@findAndReplace-borderHighLightColor",
        value: value.newValue.findAndReplace.borderHighLightColor.toRGBAString(),
      },
      {
        sassvar: "@findAndReplace-borderHighLightColorCurrent",
        value: value.newValue.findAndReplace.borderHighLightColorCurrent.toRGBAString(),
      },
        "findAndReplace": {
          "order": 6,
          "type": "object",
          "title": "Find and replace border color",
          "properties": {
            "borderHighLightColor": {
              "order": 1,
              "title": "Border highlight color",
              "description": "This sets the border of the rectangle that appears around search terms. Just do a seach real quick to see what I'm talking about.",
              "type": "color",
              "default": "rgba(255, 255, 255, 1)"
            },
            "borderHighLightColorCurrent": {
              "order": 2,
              "title": "Border highlight color - current selected term",
              "description": "This sets the border of the rectangle of the currently selected search terms. Just do a seach real quick to see what I'm talking about.",
              "type": "color",
              "default": "rgba(0, 255, 102, 1)"
            }
          }
        },
// Git colors color
      {
        sassvar: "@git-infoColor",
        value: value.newValue.git.infoColor.toRGBAString(),
      },
      {
        sassvar: "@git-successColor",
        value: value.newValue.git.successColor.toRGBAString(),
      },
      {
        sassvar: "@git-warningColor",
        value: value.newValue.git.warningColor.toRGBAString(),
      },
      {
        sassvar: "@git-errorColor",
        value: value.newValue.git.errorColor.toRGBAString(),
      },
// Settings page styles
      {
        sassvar: "@settingsPage-background",
        value: value.newValue.settingsPage.background,
      },
      {
        sassvar: "@settingsPage-nav",
        value: value.newValue.settingsPage.nav,
      },
      {
        sassvar: "@settingsPage-border",
        value: value.newValue.settingsPage.border,
      },
    ]
  }
}
