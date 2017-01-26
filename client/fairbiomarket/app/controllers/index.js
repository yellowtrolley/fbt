import Ember from 'ember';

export default Ember.Controller.extend({
	headerMessage: 'Coming Soon',
  responseMessage: '',
  itemName: '',

  isValid: Ember.computed.notEmpty('itemName'),
  isDisabled: Ember.computed.not('isValid'),



	itemNameChanged: Ember.observer('itemName', function() {
  	console.log('observer is called', this.get('itemName'));	
	}),


	actions: {
    searchItems() {
      const itemName = this.get('itemName');

      const matches = this.store.createRecord('item', { name: itemName });
      
      // newInvitation.save().then((response) => {
      //   this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
      //   this.set('itemName', '');
      // });

    }
  }

});
