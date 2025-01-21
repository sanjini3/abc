// Step 1: Authenticate the user
function authenticateUser(userId, callback) {
    console.log(`Authenticating user ${userId}...`);
    // Simulate authentication check (e.g., from a database)
    setTimeout(() => {
      const isAuthenticated = true;  // Simulate an authenticated user
      if (isAuthenticated) {
        callback(null, userId);  // Proceed to next step
      } else {
        callback("Authentication failed", null);  // Reject with error
      }
    }, 1000); // Simulated delay
  }
  
  // Step 2: Verify payment method
  function verifyPaymentMethod(paymentMethod, callback) {
    console.log("Verifying payment method...");
    // Simulate payment method verification (e.g., credit card, bank)
    setTimeout(() => {
      const isValid = true;  // Simulate a valid payment method
      if (isValid) {
        callback(null, paymentMethod);  // Proceed to next step
      } else {
        callback("Invalid payment method", null);  // Reject with error
      }
    }, 1000); // Simulated delay
  }
  
  // Step 3: Process the payment
  function processPayment(paymentMethod, callback) {
    console.log("Processing payment...");
    // Simulate payment processing (e.g., interaction with payment gateway)
    setTimeout(() => {
      const isSuccessful = true;  // Simulate successful payment
      if (isSuccessful) {
        callback(null, paymentMethod);  // Proceed to next step
      } else {
        callback("Payment processing failed", null);  // Reject with error
      }
    }, 2000); // Simulated delay
  }
  
  // Step 4: Update the user's account balance
  function updateAccountBalance(userId, callback) {
    console.log("Updating account balance...");
    // Simulate account balance update (e.g., database update)
    setTimeout(() => {
      const isUpdated = true;  // Simulate successful account update
      if (isUpdated) {
        callback(null, userId);  // Proceed to next step
      } else {
        callback("Failed to update account balance", null);  // Reject with error
      }
    }, 1000); // Simulated delay
  }
  
  // Step 5: Notify the user via email
  function notifyUser(userId, callback) {
    console.log("Sending notification email...");
    // Simulate sending email (e.g., using an email service)
    setTimeout(() => {
      console.log(`Payment notification sent to user ${userId}.`);
      callback(null, "Payment processed successfully!");  // End the process
    }, 1000); // Simulated delay
  }
  
  // Payment processing flow using callbacks
  function processPaymentFlow(userId, paymentMethod) {
    authenticateUser(userId, (error, authenticatedUser) => {
      if (error) {
        return console.error(error);  // Stop the process if authentication fails
      }
      verifyPaymentMethod(paymentMethod, (error, validMethod) => {
        if (error) {
          return console.error(error);  // Stop the process if payment method is invalid
        }
        processPayment(validMethod, (error, processedPayment) => {
          if (error) {
            return console.error(error);  // Stop the process if payment fails
          }
          updateAccountBalance(authenticatedUser, (error, updatedAccount) => {
            if (error) {
              return console.error(error);  // Stop the process if account update fails
            }
            notifyUser(updatedAccount, (error, result) => {
              if (error) {
                return console.error(error);  // Stop the process if notification fails
              }
              console.log(result);  // Final success message
            });
          });
        });
      });
    });
  }
  
  // Simulate a payment process
  processPaymentFlow(12345, 'creditCard');
  