var os = require('os');
var real_cpus = os.cpus().length;
var display_cpus = process.env.NODE_CPUS || real_cpus;

var cpus_ = os.cpus;
os.cpus = function() {
    return cpus_().slice(0, display_cpus);
}

console.log(os.cpus().length);


