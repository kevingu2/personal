import Ember from 'ember';

let ios_projects =[{
  id:1,
  image:"assets/images/g1.jpg",
  link: "assets/images/g1.jpg",
  title: "At veroeos"
},{
  id:2,
  image:"assets/images/g2.jpg",
  link: "assets/images/g2.jpg",
  title: "Ducimus vero"
}];

let web_projects = [{
  id:1,
  image:"assets/images/g1.jpg",
  link: "assets/images/g1.jpg",
  title: "At veroeos"
},{
  id:2,
  image:"assets/images/g2.jpg",
  link: "assets/images/g2.jpg",
  title: "Ducimus vero"
},{
  id:3,
  image:"assets/images/g3.jpg",
  link: "assets/images/g3.jpg",
}];

let all_projects = Ember.computed.union('ios_projects', 'web_projects');
export default Ember.Route.extend({
  classNameBindings: ['index'],

  model(){
    console.log("Get models");
    return Ember.RSVP.hash({
      all_projects: all_projects,
      ios_projects: ios_projects,
      web_projects: web_projects
    });
  },

  setupController(controller, model) {
    this._super(...arguments);
    Ember.set(controller, 'all_projects', model.all_projects);
    Ember.set(controller, 'ios_projects', model.ios_projects);
    Ember.set(controller, 'web_projects', model.web_projects);
  }

});