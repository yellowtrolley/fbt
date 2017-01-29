import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('item');
	},

  setupController: function (controller, model) {
    this._super(controller, model);

    new Ember.RSVP.Promise(function(resolve) {
      const image = new Image();
      image.onload = function() {
            resolve();
      };
    });

  },

	actions: {
    deleteItem(item) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        item.destroyRecord();
      }
    }
  }
});
