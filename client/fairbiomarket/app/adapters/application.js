import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api',
  i18n: Ember.inject.service()
});


// import FirebaseAdapter from 'emberfire/adapters/firebase';

// export default FirebaseAdapter.extend({
// });
