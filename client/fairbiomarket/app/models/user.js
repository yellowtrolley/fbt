import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
	email: DS.attr('string'),
	activation_date: DS.attr('date'),
	roles: DS.hasMany('roles'),
	password: DS.attr('string'),
  name: DS.attr('string'),
	activation_key: DS.attr('string'),
	enabled: DS.attr('boolean'),
	locked: DS.attr('boolean'),
	photoId: DS.attr('string'),
	phone: DS.attr('string'),
	account_type: DS.attr('string'),

	isValidEmail: Ember.computed.match('email', /^.+@.+\..+$/),
	isPasswordEnoughLong: Ember.computed.gte('password.length', 5),

  isValid: Ember.computed.and('isValidEmail', 'isPasswordEnoughLong'),
	isNotValid: Ember.computed.not('isValid')
});
