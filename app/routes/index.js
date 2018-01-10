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
}];

let web_projects = [{
  id:2,
  image:"assets/images/emissary-min.png",
  link: "http://webstormtroopers.herokuapp.com",
  title: "Emissary"
},{
  id:3,
  image:"assets/images/SAIC-min.png",
  link: "http://saic-manager.herokuapp.com",
  title: "Internal Manager"
},{
  id:1,
  image:"assets/images/annie-emerson-min.png",
  link: "https://annie-emerson.herokuapp.com",
  title: "Wedding"
}];

let all_projects = Ember.computed.union('ios_projects', 'web_projects');
let latest_project = {
  link: "https://xd.adobe.com/view/f7ef8463-f4d3-4b41-9533-4149bc4cbf16/",
  summary: "An app that helps build community",
  title: "Community iOS App",
  image: "assets/images/community.jpg",
  details: "This app helps users to setup meetups with people in their community, \
    so that they can get to know individuals in their community in a deeper level. I \
    am looking for developers and designers to help on this project",
  project_link: "https://github.com/kevingu2/ComunityIOS"
}
let about_me_text = "I love working with customers through the process in delivering a \
  quality product. With my team, we go over the requirements and iron out the core features. \
  We mockup the application and go over with our customers the direction of the application. \
  Finally, we begin developing the application with a clear idea of our customer's application. \
  I have experience working with Web and iOS applications. I am looking for someone who can mentor \
  me in my young software engineer career";
let linkedin_url = "https://www.linkedin.com/in/kevin-gu-7bb52b66";
let github_url = "https://github.com/kevingu2";

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
    Ember.set(controller, 'latest_project', latest_project);
    Ember.set(controller, 'about_me_text', about_me_text);
    Ember.set(controller, 'linkedin_url', linkedin_url);
    Ember.set(controller, 'github_url', github_url);
  }

});
