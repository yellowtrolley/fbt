import Ember from 'ember';

export default Ember.Component.extend({
	buttonLabel: 'Save',

  actions: {
    buttonClicked(param) {
      this.sendAction('action', param);
    }

    /* ember-power-select-with-create actions */
   //  createCategory(name) {
   //  	this.sendAction('createCategory', name);
   //  },

	 	// hideCreateOptionOnSameName(term) {
	  //   let existingOption = this.get('categories').findBy('name', term);
	  //   return !existingOption;
	  // },

   //  customSuggestion(term) {
	  //   return `Create new category: ${term}`;
	  // }
  }
});
