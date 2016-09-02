import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr('string'),
  link: DS.attr('string'),
  title: DS.attr('string')
});
