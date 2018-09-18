/**
 * @module Project
 * @description Workspace group by users
 */

module.exports = {
  tableName: 'fiberfy_projects',
  cascadeOnDestroy: true,
  attributes: {
    name: {
      type: 'string'
    },
    status: {
      type: 'string'
    },
    latitude: {
      type: 'number'
    },
    longitude: {
      type: 'number'
    },
    zoom: {
      type: 'number'
    },
    defaultZone : {
      model: 'Zone'
    },
    users: {
      collection: 'User',
      via: 'project',
      through: 'ProjectOwnership'
    }
  },
  beforeDestroy : async function (criteria, proceed) {
    if (criteria.where.id) {
      try {
        await Site.destroy({project: criteria.where.id})
        await Path.destroy({project: criteria.where.id})
        await Cable.destroy({project: criteria.where.id})
        await Box.destroy({project: criteria.where.id})
        proceed();
      } catch (err) {
        proceed(err);
      }
    } else {
      proceed();
    }
  }
};
