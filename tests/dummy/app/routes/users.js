import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.query('user', {page: 1});
  },

  setupController(controller, model) {
    controller.set('previousPage', model.get('meta.previous'));
    controller.set('nextPage', model.get('meta.next'));
    this._super(...arguments);
  }
});
