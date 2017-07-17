describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it("Accounts are created successfully", function() {
    expect(account).toEqual(jasmine.any(Account));
  });
});
