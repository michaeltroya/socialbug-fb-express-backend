//Check for valid email //
const isEmail = email => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regEx)) {
    return true;
  }
};
//Check for empty string //
const isEmpty = string => {
  if (string.trim() === '') {
    return true;
  }
};
//Validates sign up input //
exports.validateSignUpData = data => {
  let errors = {};
  if (isEmpty(data.email)) {
    errors.email = 'Email can not be empty';
  } else if (!isEmail(data.email)) {
    errors.email = 'Must be a valid email';
  }

  if (isEmpty(data.password)) {
    errors.password = 'Password can not be empty';
  }

  if (data.password !== data.confirmPassword) {
    errors.password = 'Passwords must match';
  }

  if (isEmpty(data.handle)) {
    errors.handle = 'Handle can not be empty';
  }

  return {
    errors,
    valid: Object.keys(errors).length == 0 ? true : false
  };
};
//Validates login input //
exports.validateLoginData = data => {
  let errors = {};

  if (isEmpty(data.email)) {
    errors.email = 'Email can not be empty';
  }
  if (isEmpty(data.password)) {
    errors.password = 'Password can not be empty';
  }
  return {
    errors,
    valid: Object.keys(errors).length == 0 ? true : false
  };
};
//Validates sign up input //
exports.reduceUserInfo = data => {
  let userInfo = {};
  if (!isEmpty(data.bio.trim())) {
    userInfo.bio = data.bio;
  }
  if (!isEmpty(data.website.trim())) {
    if (data.website.trim().substring(0, 4) !== 'http') {
      userInfo.website = `http://${data.website.trim()}`;
    } else {
      userInfo.website = data.website;
    }
  }
  if (!isEmpty(data.location.trim())) {
    userInfo.location = data.location;
  }
  return userInfo;
};
