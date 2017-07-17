describe('Transaction', function() {
  var transaction;

  beforeEach(function() {
    transaction = new Transaction('credit', 10, 10);
  })

  it('has a credit value', function() {
    expect(transaction.credit).toEqual(10)
  })

  it('has a date', function() {
    expect(transaction.date.length).toEqual(10)
  })

  it('has a balance of 10', function() {
    expect(transaction.balance).toEqual(10)
  })
});
