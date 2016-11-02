import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  cartTotal: Ember.computed(function() {
    var total = 0;
    this.get('shoppingCart.items').forEach(function(book) {
      total+=parseFloat(book.price);
      console.log(book.price);
    });
    return total;
  })
});
