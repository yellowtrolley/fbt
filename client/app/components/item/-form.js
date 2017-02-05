import Ember from 'ember';

export default Ember.Component.extend({
  buttonLabel: 'Save',

  actions: {
    buttonClicked(param) {
      this.sendAction('action', param);
    },

    /* ember-power-select-with-create actions */
    createCategory(name) {
     this.sendAction('createCategory', name);
    },

    createBrand(brand) {
      this.sendAction('createBrand', brand);
      console.log("brand " + brand);
    },

    hideCreateOptionOnSameName(term) {
      let existingOption = this.get('brands').findBy('name', term);
      return !existingOption;
    }

   //  customSuggestion(term) {
    //   return `Create new category: ${term}`;
    // }
  }
});
