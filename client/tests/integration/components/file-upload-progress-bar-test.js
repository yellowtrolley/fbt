import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('file-upload-progress-bar', 'Integration | Component | file upload progress bar', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{file-upload-progress-bar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#file-upload-progress-bar}}
      template block text
    {{/file-upload-progress-bar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
