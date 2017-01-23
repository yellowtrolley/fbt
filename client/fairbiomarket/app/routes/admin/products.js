import Ember from 'ember';

export default Ember.Route.extend({
	var store = this.store; // TODO in ES6
	model() {
		return Ember.RSVP.hash({
           products: store.findAll('product'),
           model: store.createRecord('contact')
    });
	}
});
