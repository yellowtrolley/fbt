import Ember from 'ember';

export default Ember.Controller.extend({
	  title: 'Create a new user',
    buttonLabel: 'Add',


  // If you haven't mapped this properties in setupController, you can alias them here
  allRoles: Ember.computed.alias('model.allRoles'),
  user: Ember.computed.alias('model.user'),

  actions: {
  	save(user) {
    	user.save().then(() => this.transitionToRoute('admin.user'));
  	},

    willTransition(transition) {
      let model = this.get('user');

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
