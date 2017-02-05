import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
	email: DS.attr('string'),
	activation_date: DS.attr('date'),
	roles: DS.hasMany('roles', { inverse: null }),
	password: DS.attr('string'),
  name: DS.attr('string'),
	activation_key: DS.attr('string'),
	enabled: DS.attr('boolean'),
	locked: DS.attr('boolean'),
	photo_id: DS.attr('string'),
	phone: DS.attr('string'),
	account_types: DS.attr(),

	isAdmin: Ember.computed.filterBy('account_types', 'ADMIN'),
	isSeller: Ember.computed.filterBy('account_types', 'SELLER'),
	isBuyer: Ember.computed.filterBy('account_types', 'BUYER'),

	isValidEmail: Ember.computed.match('email', /^.+@.+\..+$/),
	isPasswordEnoughLong: Ember.computed.gte('password.length', 5),

  isValid: Ember.computed.and('isValidEmail', 'isPasswordEnoughLong'),
	isNotValid: Ember.computed.not('isValid')
});
