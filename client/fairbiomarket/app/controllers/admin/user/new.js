import Ember from 'ember';

export default Ember.Controller.extend({
	  title: 'Create a new user',
    buttonLabel: 'Add',

    actions: {
    	save() {
    		const email = this.get('email');
    		const password = this.get('password');
    		const user = this.store.createRecord('user', { email: email, password: password});
      	user.save().then(() => this.transitionTo('admin/user'));
    	}
  	}
});
