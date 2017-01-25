import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    signOut() {
      this.sendAction('signOut');
    },

    openCheckout() {
    	// do nothing yet
    }
  }
});
