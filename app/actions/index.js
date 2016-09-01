import * as helloaction from './helloaction';
import * as dialogaction from './dialogaction';
import * as deleteaction from './deleteaction';
const actions = {};

Object.assign(actions,
              helloaction, 
              dialogaction,
              deleteaction,
              );

module.exports = actions;