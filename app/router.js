import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

this.route('about',{path:'about'});

this.route('hello',{path:'hello/:name'});


});

export default Router;
