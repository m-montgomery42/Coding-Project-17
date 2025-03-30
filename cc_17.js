// Task 1: Create a Customer Class
class Customer {
    constructor(name, email) {
      this.name = name; // Assign customer name
      this.email = email; // Assign customer email
      this.purchaseHistory = []; // Initialize empty purchase history
    }
  
    addPurchase(amount) {
      this.purchaseHistory.push(amount); // Add purchase amount to history
    }
  
    getTotalSpent() {
      return this.purchaseHistory.reduce((sum, amount) => sum + amount, 0); // Calculate total spent
    }
  
    logTotalSpent() {
      console.log(`New Customer Created: ${this.name}, Email: ${this.email}, Total spent: $${this.getTotalSpent().toFixed(2)}`); // Log correct total spent
    }
  }