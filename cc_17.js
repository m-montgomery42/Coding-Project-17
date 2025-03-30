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

// Task 2: Create a SalesRep Class
class SalesRep {
    constructor(name) {
      this.name = name; // Assign sales rep name
      this.clients = []; // Initialize empty client list
    }
  
    addClient(customer) {
      this.clients.push(customer); // Add customer to client list
    }
  
    getClientTotal(name) {
      const client = this.clients.find(client => client.name === name); // Find customer by name
      const totalSpent = client ? client.getTotalSpent() : 0; // Get total spent or return 0
      console.log(`Sales Rep ${this.name}’s Client: ${name}, Total spent: $${totalSpent.toFixed(2)}`); // Log correct client total spent
      return totalSpent; // Return total spent
    }
  }