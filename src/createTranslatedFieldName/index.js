
/**
 * [createTranslatedFieldName description]
 * @param  {string} name   [description]
 * @param  {Array<string>} locale [description]
 * @return {string}        [description]
 */
module.exports = function createTranslatedFieldName (name, locale) {
  return `${name}_${locale}`;
};
