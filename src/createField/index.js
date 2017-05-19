import reduce from 'lodash/reduce';

import createTranslatedFieldName from '../createTranslatedFieldName';

/**
 * Used to create translatable fields for dynamic content
 * @param  {String} name    Name for a field
 * @param  {Object} opts    Field options. Note: opts.type required by Keystone!
 * @param  {Array} locales  Array of used locales. E.g. ['th', 'en']
 * @return {Object}         Object with keys for localized fields. E.g. {name_th: opts, name_en: opts}
 */
module.exports = function createTranslatedField (name, opts, locales) {
  return reduce(locales, (fields, locale) => {
    return Object.assign({}, fields, { [createTranslatedFieldName(name, locale)]: opts });
  }, {});
};
