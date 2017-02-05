import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('item');
  },

  // To set controller params in a Route, we can use the setupController hook.
  setupController: function (controller, model) {
    this._super(controller, model);

    // controller.set('title', 'Create a new item');
    // controller.set('buttonLabel', 'Add');
    controller.set('categories', this.store.findAll('category'));
    controller.set('brands', ['camposeven', 'algamar']);
  },

  // For setting a non-default template location, we can use the renderTemplate hook.
  // renderTemplate() {
  //   this.render('item/form');
  // },

  actions: {
    willTransition(transition) {
      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) { // use Ember Model’s hasDirtyAttributes computed property to check whether something was changed in the model
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

        if (confirmation) {
          if (model.get('isNew')) {
            // Remove orphan images
            let imageIds = model.get('imageids');
            if (imageIds && imageIds.length) {
              imageIds.forEach(function(id){
                Ember.$.ajax({
                  method: `DELETE`,
                  contentType: "application/vnd.api+json",
                  url: `/files/${id}`,
                  error: function() {
                    console.log("An error occurred while deleting file!");
                  }
                });
              });
            }

            model.destroyRecord();
          }
        } else {
          transition.abort();
        }
      }
    }
  }
});