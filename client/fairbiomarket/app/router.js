import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');


  this.route('admin', function() {
    this.route('invitations');
    this.route('contacts');
    this.route('user', function() {
      this.route('new');
    });
    this.route('roles');
    this.route('categories');
  });

  this.route('item', function() {
    this.route('new');
    this.route('edit', { path: '/:item_id/edit' });
  });

  // this.route('index', function() {
  //   this.route('buy');
  //   this.route('sell');
  // });
  this.route('sell');
});

export default Router;
