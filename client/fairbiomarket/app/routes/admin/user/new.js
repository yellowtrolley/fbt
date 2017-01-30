import Ember from 'ember';

export default Ember.Route.extend({
	model() {
    return Ember.RSVP.hash({
      allRoles: this.store.findAll('role'),
      user: this.store.createRecord('user')
    });
  },

  renderTemplate() {
    this.render('admin/user/form');
  }/*,

  actions: {
    willTransition(transition) {
      let model = this.controller.get('user');

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
  }*/
});
