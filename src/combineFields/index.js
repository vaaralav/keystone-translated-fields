import reduce from 'lodash/reduce';

/**
 * Combine array of field objects, e.g. [{title: {type: String}}, {name: {type: String}}],
 * into one object, e.g. {title: {type: String}, name: {type: String}}
 * @param  {Array} fieldsArray [description]
 * @return {Object}             [description]
 */
module.exports = function combineFields (fieldsArray) {
  return reduce(fieldsArray, (fields, field) => {
    return Object.assign({}, fields, field);
  });
};
