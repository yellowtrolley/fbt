import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  // items: DS.hasMany('item'),
  // TODO Handle hierarchy, parent, children categories
  isEditing: false
});
