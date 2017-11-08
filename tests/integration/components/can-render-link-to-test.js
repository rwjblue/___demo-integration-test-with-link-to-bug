import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('can render link-to', {
  integration: true,
});

test('it does not throw an error', function(assert) {
  this.render(hbs`{{link-to 'Hi' 'index'}}`);

  assert.equal(this.$().text().trim(), 'Hi');
});
