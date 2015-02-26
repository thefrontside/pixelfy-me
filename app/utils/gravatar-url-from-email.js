var gravatarUrlFromEmail = function(email, size) {
  var trimmedEmail = email.trim().toLowerCase();
  var picSize = size || 200;
  var md5hash = md5(trimmedEmail);
  return "http://gravatar.com/avatar/" + md5hash + "?s=" + picSize.toString();
};

export default gravatarUrlFromEmail;
