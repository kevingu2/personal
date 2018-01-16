import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('my-skills', 'Integration | Component | my skills', {
  integration: true
});

let skill = {
  language: "language1",
  percent_mastery: "70%",
  level: "level1"
};

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{my-skills}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#my-skills}}
      template block text
    {{/my-skills}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it renders skills', function(assert) {
  this.set('skill', skill);
  this.render(hbs`{{my-skills skill=skill}}`);

  let h3Elems = this.$('.item').find('h3');
  assert.equal(h3Elems.length, 1);
  let h3Elem = h3Elems[0];
  assert.ok(h3Elem.textContent.indexOf(skill.language) !== -1);
  assert.ok(h3Elem.textContent.indexOf(skill.level) !== -1);


  let levelBarElems = this.$('.level-bar').find('.level-bar-inner');
  assert.equal(levelBarElems.length, 1);
  let levelBarElem = levelBarElems[0];
  assert.ok(levelBarElem.outerHTML.indexOf(skill.percent_mastery) !== -1);
});
