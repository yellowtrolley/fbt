import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('product', params.product_id);
  },

  // To set controller params in a Route, we can use the setupController hook.
  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Edit product');
    controller.set('buttonLabel', 'Save changes');
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
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});