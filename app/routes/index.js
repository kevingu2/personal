import Ember from 'ember';

let ios_projects =[{
  id:1,
  image:"assets/images/treds-min.jpg",
  link: "https://itunes.apple.com/us/app/treds/id1066131472?mt=8",
  title: "Treds"
},{
  id:2,
  image:"assets/images/border-wait-min.jpg",
  link: "https://itunes.apple.com/us/app/best-time-to-cross-the-border/id570288644?mt=8",
  title: "Border Wait Time"
},{
  id:3,
  image:"assets/images/mother-to-baby-min.jpg",
  link: "https://itunes.apple.com/us/app/mothertobaby/id1116292287?mt=8",
  title: "Mother To Baby"
},{
  id:4,
  image:"assets/images/cubic-min.jpg",
  link: "assets/pdfs/CubicPoster.pdf",
  title: "IBeacon"
}];

let web_projects = [{
  id:1,
  image:"assets/images/annie-emerson-min.png",
  link: "https://annie-emerson.herokuapp.com",
  title: "Annie and Emerson"
},{
  id:2,
  image:"assets/images/emissary-min.png",
  link: "http://webstormtroopers.herokuapp.com",
  title: "Emissary"
},{
  id:3,
  image:"assets/images/SAIC-min.png",
  link: "http://saic-manager.herokuapp.com",
  title: "Internal Manager"
}];

let all_projects = Ember.computed.union('ios_projects', 'web_projects');
export default Ember.Route.extend({
  classNameBindings: ['index'],

  model(){
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