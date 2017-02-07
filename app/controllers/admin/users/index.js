import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editUser(user) {
      user.set('isEditing', true);
    },

    updateUser(user) {
      user.save().then(
        user => user.set('isEditing', false)
      );
    },

    deleteUser(user) {
      user.destroyRecord();
    }
  }
});
