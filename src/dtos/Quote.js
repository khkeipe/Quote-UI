export class Quote {

	constructor(orderNumber, reqDate, customer, dealer, pool, notes) {
		this.orderNumber = orderNumber;
		this.requestDate = reqDate;
		this.quoteCustomer = customer;
		this.quoteDealer = dealer;
		this.pool = pool;
		this.notes = notes
	}
}