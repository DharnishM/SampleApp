import EmberRouter from '@ember/routing/router';
import config from 'testapp/config/environment';
export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}
Router.map(function () {
  this.route('index',{path:'/homepage'});
  this.route('shows', {path:'/shows'});
  this.route('register');
  this.route('about',{path:'/about_us'});
  this.route('booking',{path:'/movies-list'});
  this.route('popmovie',{path:'/movies/:movies_id'});
});
