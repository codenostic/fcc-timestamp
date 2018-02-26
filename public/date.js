module.exports = function(dataString){
  var dateObject = {unix: 1, natural: 1};
  var date = new Date(dataString);
  return date;
}
