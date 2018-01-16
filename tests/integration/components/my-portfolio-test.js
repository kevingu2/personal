import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('my-portfolio', 'Integration | Component | my portfolio', {
  integration: true
});

let projects =[{
  image:"image1",
  link: "link1",
  title: "title1",
  detail: "detail1"
},{
  image:"image2",
  link: "link2",
  title: "title2",
  detail: "detail2"
}];

test('it renders', function(assert) {

  this.render(hbs`{{my-portfolio}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#my-portfolio}}
      template block text
    {{/my-portfolio}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it renders my portfolio', function(assert) {
  this.set('projects', projects);
  this.render(hbs`{{my-portfolio all_projects=projects}}`);

  let itemElems = this.$().find('.item');
  assert.equal(itemElems.length, projects.length);
});
