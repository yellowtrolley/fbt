import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('product');
  },

  // To set controller params in a Route, we can use the setupController hook.
  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new product');
    controller.set('buttonLabel', 'Add');
  },

  // For setting a non-default template location, we can use the renderTemplate hook.
  renderTemplate() {
    this.render('products/form');
  },


  actions: {
    saveProduct(newProduct) {
      newProduct.save().then(() => this.transitionTo('products'));
    },

    willTransition(transition) {
      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) { // use Ember Model’s hasDirtyAttributes computed property to check whether something was changed in the model
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

        if (confirmation) {
          if (model.get('isNew')) {
            model.destroyRecord();
          }
        } else {
          transition.abort();
        }
      }
    }
  }
});