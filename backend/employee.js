var mongoose = require('mongoose');
var employeeSchema =  new mongoose.Schema({
    employeeId: {
        type: String
    },
    address: {
        type: String
    },
    employeeName: {
        type: String
    },
    designation: {
        type:String
    },
    nationality: {
        type: String
    },
    phoneNo: {
        type: String
    },
    dob: {
        type: Date,
        required:true
    }

});

module.exports = mongoose.model('Employee', employeeSchema);
module.exports.schema = employeeSchema;