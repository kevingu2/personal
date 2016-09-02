import Ember from 'ember';
let projects = [{
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
  title: "Ducimus vero"
}];
export default Ember.Route.extend({
  model(){
    console.log("Get models");
    return projects;
  }
});
