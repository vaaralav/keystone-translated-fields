import Fields from '.';

console.log(Fields);

test('Should get translated field correctly', () => (
  expect(
    Fields.getField(
      {name_fi: 'Ville'},
      'name',
      'fi'
      )).toBe('Ville')
));
