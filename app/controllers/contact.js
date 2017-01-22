import Ember from 'ember';

export default Ember.Controller.extend({
	emailAddress: '',

	message: '',

	isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

 	isValidMessage: Ember.computed.gte('message.length', 5),

 	isValid: Ember.computed.and('isValidEmail', 'isValidMessage'),

 	isNotValid: Ember.computed.not('isValid'),

	actions: {
    sendMessage() {
      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      const email = this.get('emailAddress');
      const message = this.get('message');
      const newContact = this.store.createRecord('contact', { email: email, message: message });
      
      newContact.save().then((response) => {
        this.set('responseMessage', `Thank you! We saved your message with the following id: ${response.get('id')}`);
        this.set('emailAddress', '');
	      this.set('message', '');
      });
    }
  }

});
