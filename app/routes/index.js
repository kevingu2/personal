import Ember from 'ember';

let musics = [{
  title: "Shelter",
  artist: "Porter Robinson & Madeon",
  link: "https://www.youtube.com/watch?v=HQnC1UHBvWA"
},{
  title: "1-800-273-8255",
  artist: "Logic, Alessia Cara, Kahild",
  link: "https://www.youtube.com/watch?v=Kb24RrHIbFk"
},{
  title: "Heroes (we could be)",
  artist: "Alesso ft. Tove Lo",
  link: "https://www.youtube.com/watch?v=a7SouU3ECpU"
}];

let skills = [{
  language: "Python",
  percent_mastery: "70%",
  level: "Experienced"
},{
  language: "Javascript: Nodejs/Emberjs",
  percent_mastery: "70%",
  level: "Experienced"
},{
  language: "iOS Development: Swift",
  percent_mastery: "70%",
  level: "Experienced"
},{
  language: "Ruby on Rails",
  percent_mastery: "50%",
  level: "Experienced"
}];

let work_experiences = [{
  title: "Software Engineer",
  company: "Apple",
  duration: "2016 - present",
  tasks: [
    "Automated and architectured iOS Notes performance and functional tests and introduced into their build team CI pipeline",
    "Designed and refractored and setup CI pipeline for a QA reporting tool"
  ]
},{
    title: "iOS Developer",
    company: "Calit2",
    duration: "2015 - 2016",
    tasks: [
      "Designed, architected, implemented, and submitted an iOS mobile app that aids CHP officers in determining if a driver has a driving impairment called TREDS.",
      "Architected and implemented an iOS and Watch app using Swift that acts as mobile probes in estimating border crossing wait times.",
      "Designed, architected, implemented, and submitted an iOS mobile app for MotherToBaby that provides pregnant women resources to common question regarding their pregnancy."
    ]
}];

let ios_projects =[{
  id:1,
  image:"assets/images/treds-min.jpg",
  link: "https://itunes.apple.com/us/app/treds/id1066131472?mt=8",
  title: "Treds",
  detail: "iOS mobile app that aids CHP officers in determining if a driver has a driving impairment called TREDS."
},{
  id:3,
  image:"assets/images/mother-to-baby-min.jpg",
  link: "https://itunes.apple.com/us/app/mothertobaby/id1116292287?mt=8",
  title: "Mother To Baby",
  detail: "iOS mobile app that provides pregnant women resources to common question regarding their pregnancy."
}];

let web_projects = [{
  id:3,
  image:"assets/images/SAIC-min.png",
  link: "http://saic-manager.herokuapp.com",
  title: "Internal Manager",
  detail: "Ruby Rails web application that allows a manager to organize their employees on tasks"
},{
  id:1,
  image:"assets/images/annie-emerson-min.png",
  link: "https://annie-emerson.herokuapp.com",
  title: "Wedding",
  detail: "Node JS web application that displayed information about the wedding and allowed guest to RSVP"
}];

let all_projects = Ember.computed.union('ios_projects', 'web_projects');
let latest_project = {
  link: "https://xd.adobe.com/view/f7ef8463-f4d3-4b41-9533-4149bc4cbf16/",
  summary: "An app that helps build community",
  title: "Community iOS App",
  image: "assets/images/community.jpg",
  details: "This app helps users to setup meetups with people in their community," +
    "so that they can get to know individuals in their community in a deeper level. I " +
    "am looking for developers and designers to help on this project",
  project_link: "https://github.com/kevingu2/ComunityIOS"
};
let about_me_text = "I love working with customers through the process in " +
  "delivering a quality product. With my team, we go over the requirements " +
  "and iron out the core features. We mockup the application and go over with " +
  "our customers the direction of the application. Finally, we begin developing " +
  "the application with a clear idea of our customer's application. I have experience " +
  "working with Web and iOS applications. I am looking for someone who can mentor me " +
  "in my young software engineer career.";
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
    Ember.set(controller, 'musics', musics);
    Ember.set(controller, 'skills', skills);
    Ember.set(controller, 'work_experiences', work_experiences);
  }

});
