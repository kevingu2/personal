import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement() {
    console.log('Insert my Portfolio');
    this._super(...arguments);
    this.$('#horizontalTab').easyResponsiveTabs({
      type: 'default', //Types: default, vertical, accordion           
      width: 'auto', //auto or any width like 600px
      fit: true   // 100% fit in a container

    });
  },
});