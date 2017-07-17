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

  it('User can deposit 10 into the account and change the balance', function() {
    account.deposit(10);
    expect(account.balance).toEqual(10);
  })
});
