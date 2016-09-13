'use babel';

import pojo from './pojo';
import debounceOnChange from './debounce-onchange';


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
