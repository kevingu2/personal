import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr('string', { defaultValue: '' }),
  link: DS.attr('string', { defaultValue: '' }),
  title: DS.attr('string', { defaultValue: '' }),
  type: DS.attr('string', { defaultValue: ''})
});
