import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		// RSVP.hash wraps multiple promises and returns a nicely structured hashed object. More information: http://emberjs.com/api/classes/RSVP.html#method_hash
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      roles: this.store.findAll('role') // TODO sellers and buyers
    });
  },

	// you can skip this step. If you skip, you have to use model.users, model.roles properties in your controller and in your template.
  setupController(controller, model) {
    controller.set('users', model.users);
    controller.set('roles', model.roles);
  }
});