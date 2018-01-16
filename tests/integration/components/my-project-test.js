import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('my-project', 'Integration | Component | my project', {
  integration: true
});

let project = {
  image:"assets/images/image1",
  link: "https://google.com/",
  title: "title1",
  detail: "details1"
};

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{my-project}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#my-project}}
      template block text
    {{/my-project}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it renders injected project', function(assert) {
  this.set('project', project);
  this.render(hbs`{{my-project project=project}}`);

  let linkElems = this.$('.item').find('.col-md-4');
  assert.equal(linkElems.length, 1);
  let linkElem = linkElems[0];
  assert.equal(linkElem.href, project.link);

  let imgElems = this.$('.col-md-4').find('img');
  assert.equal(imgElems.length, 1);
  let imgElem = imgElems[0];
  assert.notEqual(imgElem.src, "");

  let headerElems = this.$('.item').find('h3');
  assert.equal(headerElems.length, 1);
  let headerLinkElems = this.$('.title').find('a');
  assert.equal(headerLinkElems.length, 1);
  let headerLinkElem = headerLinkElems[0];
  assert.equal(headerLinkElem.href, project.link);
  assert.equal(headerLinkElem.textContent, project.title);

});
