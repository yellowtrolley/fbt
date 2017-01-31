import Ember from 'ember';

export default Ember.Controller.extend({
  i18n: Ember.inject.service(),

  title: '',
  buttonLabel: '',

  init() {
    this._super();
    this.set('title', this.get('i18n').t('item.new.title'/*, { post: post }*/));
    this.set('buttonLabel', this.get('i18n').t('item.button.select.add'));
  },

  actions: {
    addImages: function(fileIds) {
      let item = this.get('model');
      item.set('imageids', fileIds);
    },

    save(newItem) {
      newItem.save().then(() => this.transitionToRoute('sell'));
    },

    createCategory(name) {
      this.store.createRecord('category', {name: name});
    }
	}
});
