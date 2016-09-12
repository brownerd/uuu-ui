'use babel';

import fs from 'fs';
import updateStyles from './update-styles.js';
import configSchema from './config-schema.json';

export default {
  config: configSchema,

  activate () {
    updateStyles();
  }
}
