import Ember from 'ember';

export default Ember.Controller.extend({
	  title: 'Create a new item',
    buttonLabel: 'Add',
    
    actions: {
      addImages: function(fileIds) {
        let item = this.get('model');
        item.set('imageids', fileIds);
      },

      save(newItem) {
        newItem.save().then(() => this.transitionToRoute('sell'));
      },

      willTransition(transition) {
        let model = this.get('model');

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
      },

      createCategory(name) {
        this.store.createRecord('category', {name: name});
      }
  	}
});
