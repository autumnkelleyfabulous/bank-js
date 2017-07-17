function Account() {
  this.balance = 0;
  this.transactions = [];
}

Account.prototype.deposit = function(amount) {
  this.balance = this.balance + amount;
  this.transactions.push(new Transaction('credit', amount, this.balance))
}

Account.prototype.withdraw = function(amount) {
  this.balance = this.balance - amount;
  this.transactions.push(new Transaction('debit', amount, this.balance))
}
