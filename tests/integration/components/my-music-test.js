import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('my-music', 'Integration | Component | my music', {
  integration: true
});

let music = {
  title: "title1",
  artist: "artist1",
  link: "https://www.google.com/"
};

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{my-music}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#my-music}}
      template block text
    {{/my-music}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it renders injected music', function(assert) {
  this.set('music', music);
  this.render(hbs`{{my-music music=music}}`);
  let elems = this.$().find('a');
  assert.equal(elems.length, 1);
  let musicElem = elems[0];
  let textElem = musicElem.textContent;
  assert.notEqual(textElem, '');
  assert.equal(textElem, music.artist + ' - ' + music.title);
  assert.equal(musicElem.href, music.link);
});
