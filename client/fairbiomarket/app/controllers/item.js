import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
    addItem() {
      const name = this.get('name');
      const description = this.get('description');
      const price = this.get('price');
      const newItem = this.store.createRecord('item', { name: name, description: description, price: price });
      
      newItem.save().then((response) => {
        this.set('responseMessage', `Item: ${response.get('name')} added`);
      });
    }
  }
});
