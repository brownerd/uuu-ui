'use babel';

import fs from 'fs';
import updateStyles from './set-new-colors.js';
import configSchema from './config-schema.json';

export default {
  config: configSchema,

  activate () {
    updateStyles();
  }
}
