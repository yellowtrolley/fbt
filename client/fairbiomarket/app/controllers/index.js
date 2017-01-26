import Ember from 'ember';

export default Ember.Controller.extend({
	headerMessage: 'Coming Soon',
  responseMessage: '',
  itemName: '',
  results: [],

  isValid: Ember.computed.notEmpty('itemName'),
  isDisabled: Ember.computed.not('isValid'),

	itemNameChanged: Ember.observer('itemName', function() {
  	console.log('observer is called', this.get('itemName'));	
	}),


	actions: {
    searchItems(itemName) {
      const matches = this.store.createRecord('item', { name: itemName });
      // GET to /item?filter[name]=itemName
      this.store.query('item', { filter: { name: itemName } }).then(function(data) {
        this.set('results', data);
      });
      
      // newInvitation.save().then((response) => {
      //   this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
      //   this.set('itemName', '');
      // });

    },

    addToShoppingCart(product) {
      // `shoppingCart` injected as a Service in initializer, so we can call it with this syntax
      this.shoppingCart.add(product);
    }
  }

});
