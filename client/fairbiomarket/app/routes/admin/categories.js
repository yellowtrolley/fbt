import Ember from 'ember';

export default Ember.Route.extend({
  model() {
		// RSVP.hash wraps multiple promises and returns a nicely structured hashed object. More information: http://emberjs.com/api/classes/RSVP.html#method_hash
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      newCategory: this.store.createRecord('category')
    });
  }
});
