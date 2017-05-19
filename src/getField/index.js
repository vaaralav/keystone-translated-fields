import get from 'lodash/get';

import createTranslatedFieldName from '../createTranslatedFieldName';

/**
 * Get named and possibly translated field from model.
 * @param  {Object} model     A model
 * @param  {String} fieldName Field name without locale
 * @param  {String} locale    Locale
 * @return {Mixed}            Translated field if there is one, default to non-translated field.
 */
module.exports = function getField (model, fieldName, locale) {
  return get(model, createTranslatedFieldName(fieldName, locale), get(model, fieldName));
};
