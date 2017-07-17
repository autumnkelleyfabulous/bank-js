function Transaction(type, amount, balance) {
  this.date = createDate();
  this.credit = null;
  this.debit = null;
  this.balance = balance;

  if (type === 'debit') {
    this.debit = amount;
  } else {
    this.credit = amount;
  }
}
