import Ember from 'ember';

export default Ember.Controller.extend({
	categories: Ember.computed.alias('model.categories'),
	newCategory: Ember.computed.alias('model.newCategory'),

  actions: {
    addNewCategory(newCategory) {
      newCategory.save().then(
        category => {
          this.set('newCategory', this.store.createRecord('category'));
        },
        error => {
          console.error('Error from server:', error);
        });
    },

    deleteCategory(category) {
      category.destroyRecord();
    }
  }
});
