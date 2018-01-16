import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('work-experience', 'Integration | Component | work experience', {
  integration: true
});

let work_experience = {
  title: "title1",
  company: "company1",
  duration: "2016 - present",
  tasks: [
    "task1",
    "task2"
  ]
};

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{work-experience}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#work-experience}}
      template block text
    {{/work-experience}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it renders work experience', function(assert) {
  this.set('work_experience', work_experience);
  this.render(hbs`{{work-experience work_experience=work_experience}}`);

  let h3Elems = this.$('.item').find('h3');
  assert.equal(h3Elems.length, 1);
  let h3Elem = h3Elems[0];
  assert.ok(h3Elem.textContent.indexOf(work_experience.title) !== -1);
  assert.ok(h3Elem.textContent.indexOf(work_experience.company) !== -1);
  assert.ok(h3Elem.textContent.indexOf(work_experience.duration) !== -1);

  let listElems = this.$('ul').find('li');
  assert.equal(listElems.length, work_experience.tasks.length);
});
