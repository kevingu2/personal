import Ember from 'ember';

let all_projects = [{
  image:"assets/images/annie-emerson-min.png",
  link: "https://annie-emerson.herokuapp.com",
  title: "Annie and Emerson",
  type: "web"
},{
  image:"assets/images/emissary-min.png",
  link: "http://webstormtroopers.herokuapp.com",
  title: "Emissary",
  type: "web"
},{
  image:"assets/images/SAIC-min.png",
  link: "http://saic-manager.herokuapp.com",
  title: "Internal Manager",
  type: "web"
},
{
  image:"assets/images/treds-min.jpg",
  link: "https://itunes.apple.com/us/app/treds/id1066131472?mt=8",
  title: "Treds",
  type: "ios"
},{
  image:"assets/images/border-wait-min.jpg",
  link: "https://itunes.apple.com/us/app/best-time-to-cross-the-border/id570288644?mt=8",
  title: "Border Wait Time",
  type: "ios"
},{
  image:"assets/images/mother-to-baby-min.jpg",
  link: "https://itunes.apple.com/us/app/mothertobaby/id1116292287?mt=8",
  title: "Mother To Baby",
  type: "ios"
},{
  image:"assets/images/cubic-min.jpg",
  link: "assets/pdfs/CubicPoster.pdf",
  title: "IBeacon",
  type: "ios"
}];

export default Ember.Route.extend({
  classNameBindings: ['index'],
  model(){
    let store = this.get('store');
    all_projects.forEach(function(project){
      store.createRecord('project',{
        image: project.image,
        link: project.link,
        title: project.title,
        type: project.type
      });
    });
    return Ember.RSVP.hash({
        web_projects: store.peekAll('project')
    });
  },

  setupController(controller, model) {
    this._super(...arguments);
    Ember.set(controller, 'web_projects', model.web_projects);
  }

});