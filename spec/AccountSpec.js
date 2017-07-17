describe('Account', function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it('Accounts are created successfully', function() {
    expect(account).toEqual(jasmine.any(Account));
  });

  it('Account has balance when instantiated', function() {
    expect(account.balance).toEqual(0);
  })
});
