import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
	email: DS.attr('string'),
	activationDate: DS.attr('date'),
	roles: DS.hasMany('roles'),
	password: DS.attr('string'),
  name: DS.attr('string'),
	activationKey: DS.attr('string'),
	enabled: DS.attr('boolean'),
	locked: DS.attr('boolean'),
	photoId: DS.attr('string'),
	phone: DS.attr('string'),

	isValidEmail: Ember.computed.match('email', /^.+@.+\..+$/),
	isPasswordEnoughLong: Ember.computed.gte('password.length', 5),

  isValid: Ember.computed.and('isValidEmail', 'isPasswordEnoughLong'),
	isNotValid: Ember.computed.not('isValid')
});
