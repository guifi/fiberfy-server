/**
 * @module Fiber
 * @description Fiber between Site, and intermedial == site_id intermedial.
 */
 
module.exports = {
  attributes: {
    name: {
      type: 'string'
    },
    first: {
      model: 'Site'
    },
    last: {
      model: 'Site'
    },
    intermedial: {
      type: 'string'
    },
    colors: {
      type: 'string'
    },
    template: {
      model: 'fiberTemplate'
    },
    observations: {
      type: 'string'
    },
    status: {
      type: 'string'
    },
    user: {
      model: 'User'
    },

    project: {
      model: 'Project'
    }
  }
};
