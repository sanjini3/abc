const os = require('os');


function logUptime() {
  const uptimeSeconds = os.uptime();

  const days = Math.floor(uptimeSeconds / (60 * 60 * 24));
  const hours = Math.floor((uptimeSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((uptimeSeconds % (60 * 60)) / 60);

  console.log(`System Uptime: ${days} days, ${hours} hours, ${minutes} minutes`);
}


setInterval(logUptime, 5000);
