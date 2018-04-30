/**
 * @module Fiber
 * @description Fiber inside Tube
 */

module.exports = {
  tableName: 'fiberfy_fibers',
  attributes: {
    name: {
      type: 'string'
    },
    tube: {
      model: 'Tube'
    },
    color: {
      type: 'string'
    },
    observations: {
      type: 'text'
    },

    project: {
      model: 'Project'
    }
  }
};
