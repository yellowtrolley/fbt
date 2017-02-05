import Ember from 'ember';

export default Ember.Route.extend({
	// setupController: function(controller, model) {
 //    // will perform the default behaviour which will load your controller with the model.
 //    this._super.apply(this, arguments);

 //    // perform your Ember Data query or other AJAX request
 //    controller.set('newCategory', this.store.createRecord('category'));
 //  },

  model() {
		// RSVP.hash wraps multiple promises and returns a nicely structured hashed object. More information: http://emberjs.com/api/classes/RSVP.html#method_hash
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      newCategory: this.store.createRecord('category')
    });
  }
});
