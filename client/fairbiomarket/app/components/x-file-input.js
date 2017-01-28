import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'input',
  type: 'file',
  attributeBindings: ['type', 'value'],

  addChangeListenerToElement: Ember.on('didInsertElement', function() {
    let input = this.$()[0];

    input.onchange = (event) => {
      let file = event.target.files[0];
      let reader = new FileReader();
      let fileName = file.name;

      reader.onload = (event) => {
        this.sendAction('handleFileAsDataURL', fileName, event.target.result);
      };

      reader.readAsDataURL(file);
    };
  })
});
