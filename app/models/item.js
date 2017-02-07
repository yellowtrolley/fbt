import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  long_description: DS.attr('string'),
    brand:  DS.attr('string'),
	price: DS.attr('number'),
	rating: DS.attr('number'),
  seller: DS.belongsTo('user'),
  categories: DS.hasMany('category', { inverse: null }),
  imageids: DS.attr(),

  main_image_id: Ember.computed('imageids', {
                    get() {
                        console.log('computed!!!! ------->' + this.get('imageids').get(0));
                        return this.get('imageids').get(0);
                    }
                }),

	isEditing: false,
  isValid: Ember.computed.notEmpty('name'),
	isNotValid: Ember.computed.not('isValid')
});
