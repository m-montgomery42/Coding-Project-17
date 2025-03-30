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

// Task 3: Create a VIPCustomer Class (Extends Customer)
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
      super(name, email); // Call Customer constructor
      this.vipLevel = vipLevel; // Assign VIP level
    }
  
    getTotalSpent() {
      return super.getTotalSpent() * 1.1; // Apply 10% VIP bonus
    }
  
    logTotalSpent() {
      console.log(`VIP Customer’s total spent with bonus: ${this.name}, $${this.getTotalSpent().toFixed(2)}`); // Log correct total spent
    }
  }

// Task 4: Build a Client Report System

// Create sales representative
const salesRep = new SalesRep("Marcus Wild");

// Create customers
const customer1 = new Customer("Alexis Trebek", "AlexTreb1@example.com");
const customer2 = new Customer("Philip Reeves", "PReeves92@example.com");
const vipCustomer = new VIPCustomer("Regina Cahill", "CahillRegina@example.com", "Gold");

// Add purchases
customer1.addPurchase(120);
customer1.addPurchase(150);
customer2.addPurchase(675);
vipCustomer.addPurchase(480);
vipCustomer.addPurchase(750);

// Log total spent per customer **AFTER** purchases are made
customer1.logTotalSpent();
customer2.logTotalSpent();
vipCustomer.logTotalSpent();

// Add clients to sales rep
salesRep.addClient(customer1);
salesRep.addClient(customer2);
salesRep.addClient(vipCustomer);

// Log each client's total spent
salesRep.getClientTotal(customer1.name);
salesRep.getClientTotal(customer2.name);
salesRep.getClientTotal(vipCustomer.name);

// Calculate and log total revenue
const totalRevenue = salesRep.clients.reduce((total, client) => total + client.getTotalSpent(), 0);
console.log(`Total revenue from all customers: $${totalRevenue.toFixed(2)}`);

// Find and log high spenders
const highSpenders = salesRep.clients.filter(client => client.getTotalSpent() > 500);
highSpenders.forEach(client => {
  console.log(`High Spending Customer: ${client.name}, Total spent: $${client.getTotalSpent().toFixed(2)}`);
});

// Log customer summary
console.log("Customer Summary:");
salesRep.clients.forEach(client => {
  console.log(`${client.name}, Total spent: $${client.getTotalSpent().toFixed(2)}`);
});