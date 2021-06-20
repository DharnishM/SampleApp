import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | shows/register', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:shows/register');
    assert.ok(route);
  });
});
