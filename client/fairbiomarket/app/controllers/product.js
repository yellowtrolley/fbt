import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
    addProduct() {
      const name = this.get('name');
      const description = this.get('description');
      const price = this.get('price');
      const newProduct = this.store.createRecord('product', { name: name, description: description, price: price });
      
      newProduct.save().then((response) => {
        this.set('responseMessage', `Product: ${response.get('name')} added`);
      });
    }
  }
});
