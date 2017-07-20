import { moduleForModel, test } from 'ember-qunit';

moduleForModel('project', 'Unit | Model | project', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  assert.ok(!!model);
});

test('default values', function(assert) {
  let project = this.subject();
  assert.equal(project.get('image'), '');
  assert.equal(project.get('link'), '');
  assert.equal(project.get('title'), '');
  assert.equal(project.get('type'), '');
});

test('initalized values', function(assert) {
  let imagePath= "assets/images/annie-emerson-min.png";
  let link = "https://annie-emerson.herokuapp.com";
  let title = "Annie and Emerson";
  let type = "web";
  let project = this.subject({image: imagePath, link: link, title: title, type:type});
  assert.equal(project.get('image'), imagePath);
  assert.equal(project.get('link'), link);
  assert.equal(project.get('title'), title);
  assert.equal(project.get('type'), type);
});
