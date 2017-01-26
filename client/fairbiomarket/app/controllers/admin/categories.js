import Ember from 'ember';

export default Ember.Controller.extend({
	categories: Ember.computed.alias('model.categories'),
	newCategory: Ember.computed.alias('model.newCategory'),

  actions: {
    addNewCategory(newCategory) {
      newCategory.save().then(
        category => {
          this.set('newCategory', this.store.createRecord('category'));
          console.log(category);
        },
        error => {
          console.error('Error from server:', error);
        });
    },

    editCategory(category) {
      category.set('isEditing', true);
    },

    updateCategory(category) {
      category.save().then(
        category => category.set('isEditing', false)
      );
    },

    deleteCategory(category) {
      category.destroyRecord();
    }
  }
});
