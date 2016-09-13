'use babel';

// Populate plain-ol-javascript-object
// to normailze data and set all styles on every run

export default function(value) {
  return {
    reset: value.newValue.resetAllStyles.reset,
    settings: [
// These have to go at the top of the pojo
// Enums, in this case, have to be fired first
// Or else we get less errorWarning messages from ATOM
// YET, it still works.
// The issue is that it rewrites the stylesheet on every item change
// I'd like to wait until all events have fired.
// Thus I'd have to debounce onDidChange(), but I don't think I can do that

// Also, this only matters with Enum properties that have changed.
// Also, these all have conditional less statements also

// Settings page styles (Listed first)
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
    ]
  }
}
