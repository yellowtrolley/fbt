import Ember from 'ember';

export default Ember.Route.extend({
	 model() {
    return this.store.createRecord('user');
  },

  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new user');
    controller.set('buttonLabel', 'Add');
  },

  renderTemplate() {
    this.render('admin/users/form');
  },

  actions: {
    saveUser(newUser) {
      newUser.save().then(() => this.transitionTo('users'));
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
