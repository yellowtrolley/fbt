import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    signOut() {
      this.sendAction('signOut');
    },

    signIn: function(email, password) {
      this.sendAction('signIn', email, password);
    },

    openCheckout() {
    	// do nothing yet
    }
  }
});
