import Ember from 'ember';

export default Ember.Component.extend({
	progress: 40,

	actions: {
    updateProgress(progress) {
      this.set('progress', progress);
    }
  }
});
