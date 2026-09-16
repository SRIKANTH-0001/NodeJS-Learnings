const getCurrentDate=()=>new Date().toLocaleDateString();
const getCurrentTime=()=>new Date().toTimeString();

exports.getCurrentDate=getCurrentDate;
exports.getCurrentTime=getCurrentTime;