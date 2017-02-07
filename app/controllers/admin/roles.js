import Ember from 'ember';

export default Ember.Controller.extend({
  // If you haven't mapped this properties in setupController, you can alias them here
	roles: Ember.computed.alias('model.roles'),
	newRole: Ember.computed.alias('model.newRole'),

  actions: {
    addNewRole(newRole) {
      newRole.save().then(
        role => {
          this.set('newRole', this.store.createRecord('role'));
          console.log(role);
        },
        error => {
          console.error('Error from server:', error);
        });
    },

    editRole(role) {
      role.set('isEditing', true);
    },

    updateRole(role) {
      role.save().then(
        role => role.set('isEditing', false)
      );
    },

    deleteRole(role) {
      role.destroyRecord();
    }
  }
});
