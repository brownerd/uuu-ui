'use babel';

// Populate plain-ol-javascript-object
// to normailze data and set all styles on every run

export default function(value) {
  return {
    reset: value.newValue.resetAllStyles.reset,
    settings: [
// Base background color
      {
        sassvar: "@base-background-color",
        value: value.newValue.base.backgroundColor.toRGBAString(),
      },
      {
        sassvar: "@base-border-color",
        value: value.newValue.base.borderColor.toRGBAString(),
      },
    ]
  }
}
