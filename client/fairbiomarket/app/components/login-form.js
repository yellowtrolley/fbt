import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
    signIn: function(email, password) {
      this.sendAction('signIn', email, password);
    },
  }
});
