const os = require('os');

console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('Number of CPUs:', os.cpus().length);