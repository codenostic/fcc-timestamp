module.exports = function(dateString){
  var dateObject = {unix: 1, natural: 1};
  var date = new Date();
  date.setSeconds(dateString);
  return date;
}
