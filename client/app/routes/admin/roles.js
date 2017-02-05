import Ember from 'ember';

export default Ember.Route.extend({
	// setupController: function(controller, model) {
 //    // will perform the default behaviour which will load your controller with the model.
 //    this._super.apply(this, arguments);

 //    // perform your Ember Data query or other AJAX request
 //    controller.set('newRole', this.store.createRecord('role'));
 //  },

  model() {
		// RSVP.hash wraps multiple promises and returns a nicely structured hashed object. More information: http://emberjs.com/api/classes/RSVP.html#method_hash
    return Ember.RSVP.hash({
      roles: this.store.findAll('role'),
      newRole: this.store.createRecord('role')
    });
  }
});
