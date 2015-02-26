import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: Images', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /images', function(assert) {
  visit('/images');

  andThen(function() {
    assert.equal(Ember.$(".spec-gallery-image").length, 8);
  });
});
