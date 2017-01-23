import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  longDescription: DS.attr('string'),
	brand:  DS.attr('string'),
	price: DS.attr('number'),
	rating: DS.attr('number'),
  seller: DS.belongsTo('user'),

  isValid: Ember.computed.notEmpty('name'),
	isNotValid: Ember.computed.not('isValid')
});
