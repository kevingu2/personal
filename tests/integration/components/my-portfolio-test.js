import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('my-portfolio', 'Integration | Component | my portfolio', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{my-project}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#my-project}}
      template block text
    {{/my-project}}
  `);

  assert.equal(this.$().text().trim(), '');
});
