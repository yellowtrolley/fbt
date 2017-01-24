import Ember from 'ember';

export default Ember.Route.extend({
	model() {
    return Ember.RSVP.hash({
      roles: this.store.findAll('role'),
      newRole: this.store.createRecord('role')
    });
  },

  setupController(controller, model) {
    controller.set('newRole', model.newRole);
    controller.set('roles', model.roles);
  }
});
