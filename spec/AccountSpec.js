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

  it('User can withdraw 5 from the account and change the balance', function() {
    account.deposit(10);
    account.withdraw(5);
    expect(account.balance).toEqual(5);
  })

  it('Each account is instantiated with an empty array for transactions', function() {
    expect(account.transactions).toEqual([]);
  })

  it('Deposits are stored in the transaction array as objects', function() {
    account.deposit(10);
    expect(account.transactions.length).toEqual(1);
  })
});
