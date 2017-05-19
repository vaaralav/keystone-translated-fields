# keystone-translated-fields

A small helper library for multilanguage [Keystone](https://keystonejs.com) sites.

## Installation

```
$ yarn add keystone-translated-fields
```

## Example usage

### Models

```JavaScript
var keystone = require('keystone');
const { createField, combineFields } = require('keystone-translated-fields');

const locales = require('../constants').locales;
const Types = keystone.Field.Types;

const Speaker = new keystone.List('Speaker', {
  map: {
    name: 'title',
  },
  singular: 'Speaker',
  plural: 'Speakers',
  autokey: {
    path: 'slug',
    from: 'title',
    unique: true,
  },
});

Speaker.add(combineFields([
  { title: { type: String, required: true } },
  { name: { type: String } },
  { desc: { type: Types.Html, wysiwyg: true, height: 300 } },
  { image: { type: Types.CloudinaryImage } },
  createField('about', { type: String }, locales),
]));

Speaker.register();
```

### Middleware

```JavaScript
const { getField } = require('keystone-translated-fields');

exports.initLocals = function (req, res, next) {
  // ...
  res.locals.getField = getField;
  // ...
  next();
}

```

### Templates

```pug
h3 #{getField(speaker, 'title', locale)}
if speaker.desc
  != speaker.desc
p #{getField(speaker, 'about', locale)}
```
