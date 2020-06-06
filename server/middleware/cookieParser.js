const parseCookies = (req, res, next) => {
  var cookies = {};

  if (req.headers.cookie) {
    var cookiesArr = req.headers.cookie.split('; ');

    cookiesArr.forEach(cookie => {
      var splitCookie = cookie.split('=');
      cookies[splitCookie[0]] = splitCookie[1];
    });
  }
  req.cookies = cookies;
  next();
};

module.exports = parseCookies;