import Ember from 'ember';

export default Ember.Controller.extend({
	// If you haven't mapped this properties in setupController, you can alias them here
  users: Ember.computed.alias('model.users'),
  roles: Ember.computed.alias('model.roles'),

  actions : {

  }
});