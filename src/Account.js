function Account() {
  this.balance = 0;
  this.transactions = [];
}

Account.prototype.deposit = function(amount) {
  this.balance = this.balance + amount;
}

Account.prototype.withdraw = function(amount) {
  this.balance = this.balance - amount;
}
