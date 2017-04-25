const parseCookies = (req, res, next) => {
  // console.log(req.headers);
  // var reg = new RegExp(';');
  var cookieObject = {};
  var cookieHeaders = req.headers.cookie;
  
  if (cookieHeaders !== undefined) {
    cookieHeaders = cookieHeaders.replace(/;/gi, '');
    var splitBySpace = cookieHeaders.split(' ');
    
    splitBySpace.forEach(function(el) {
      // console.log(el.split('='));
      var splitByEquals = el.split('=');
      cookieObject[splitByEquals[0]] = splitByEquals[1];
    });
  }
  console.log(cookieObject);
  return cookieObject;
};


module.exports = parseCookies;