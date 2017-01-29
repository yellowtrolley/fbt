import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  long_description: DS.attr('string'),
	brand:  DS.attr('string'),
	price: DS.attr('number'),
	rating: DS.attr('number'),
  seller: DS.belongsTo('user'),
  categories: DS.hasMany('category'),
  image_ids: DS.attr(),

	isEditing: false,
  isValid: Ember.computed.notEmpty('name'),
	isNotValid: Ember.computed.not('isValid')
});
