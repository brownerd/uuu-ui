'use babel';

import path from 'path';
import pojo from './pojo';
import writeStyles from './write-to-stylesheet';
import randomComplement from './random-complement';
import debounce from './debounce';

const debounceOnChange = debounce((styles) => {
  // Call writeStyles() after debouncing atom.config.onDidChange()

  // Map over settings array and create a string that looks like
  // @text-color: rgba(145, 145, 145, 1);\n
  let data = styles.settings.map(item => `${item.sassvar}: ${item.value};`).join('\n');

  // Write all sass variables to a file
  writeStyles(path.join(__dirname, '../styles', 'uuu.less'), data, 'utf8').then(data => {
    // Once file has been written,
    // Notify user that their styles have been made
    atom.notifications.addSuccess('Success', {detail: randomComplement(), dismissable: false});
  })
  .catch(error => {atom.notifications.addWarning(error.reason)});
}, 250);

export default function() {

  // Watch uuu-ui for changes
  atom.config.onDidChange('uuu-ui', (value) => {

    // Run raw config values through a pojo to normalize output
    let styles = pojo(value);

    // only run if reset value IS false
    if (styles.reset === false) {

      // Write all sass variables to a file
      debounceOnChange(styles);

    }
    else {
      // Unset all of this themes settings
      // This will aso fire onDidChange and it will rewrite
      // the default settings to the uuu stylesheet
      atom.config.unset(`uuu-ui`);

      // Notify user that styles have been reset
      atom.notifications.addSuccess('Success', {detail:'Back to the drawing board', dismissable: false});
    }
    // console.dir(styles);
    // console.dir(atom.config.get(`uuu-syntax`));
    // console.dir(atom.config)
  });
}
