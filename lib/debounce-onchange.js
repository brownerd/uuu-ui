'use babel';

import path from 'path';
import debounce from './debounce';
import writeStyles from './write-to-stylesheet';
import randomComplement from './random-complement';

export default debounce((styles) => {
  // Call writeStyles() after debouncing atom.config.onDidChange()

  // Map over settings array and create a string that looks like
  // @text-color: rgba(145, 145, 145, 1);\n
  let data = styles.settings.map(item => `${item.sassvar}: ${item.value};`).join('\n');

  // Write all sass variables to a file
  writeStyles(path.join(__dirname, '..', 'styles', 'urawsm.less'), data, 'utf8').then(data => {
    // Once file has been written,
    // Notify user that their styles have been made
    atom.notifications.addSuccess('UI updated!', {detail: randomComplement(), dismissable: false});
  })
  .catch(error => {atom.notifications.addWarning(error.reason)});
}, 2000);
