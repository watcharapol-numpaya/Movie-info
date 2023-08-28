class Validation {
  getValidateUsername(username) {
    const userCheck = /^[a-zA-Z0-9._-]{3,15}$/;
    if (username.match(" ") || "") {
      return false;
    } else if (username.match(userCheck)) {
      return true;
    } else {
      return false;
    }
  }

  getValidateFirstName(firstname) {
    const firsNameCheck = /^[a-zA-Z]{1,35}$/;
    if (firstname.match(" ") || "") {
      return false;
    } else if (firstname.match(firsNameCheck)) {
      return true;
    } else {
      return false;
    }
  }

  getValidateLastName(lastname) {
    const lastNameCheck = /^[a-zA-Z]{1,35}$/;
    if (lastname.match(" ") || "") {
      return false;
    } else if (lastname.match(lastNameCheck)) {
      return true;
    } else {
      return false;
    }
  }

  getValidatePhoneNumber(phonenumber) {
    const phonenumberCheck = /^([06,08,09]{2})\d{8}$/;
    if (phonenumber.match(" ") || "") {
      return false;
    } else if (phonenumber.match(phonenumberCheck)) {
      return true;
    } else {
      return false;
    }
  }

  getValidatePassword(password) {
    const pwdCheck = /^(?=.*?[A-Z])(?=.*?[a-z]).{8,128}$/;

    if (password.match(" ") || "") {
      return false;
    } else if (password.match(pwdCheck)) {
      return true;
    } else {
      return false;
    }
  }

  getValidateConfirmPassword(password, confirmPass) {
    if (password === confirmPass) {
      return true;
    } else {
      return false;
    }
  }

  getValidateEmail(email) {
    const emailCheck = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (email.match(" ") || "") {
      return false;
    } else if (email.match(emailCheck)) {
      return true;
    } else {
      return false;
    }
  }

  getValidateInput(input) {
    const inputCheck = /^[a-zA-Z0-9#?!@$ %^&*._-]{1,128}$/;
    if (input.match(" ") || "") {
      return false;
    } else if (input.match(inputCheck)) {
      return true;
    } else {
      return false;
    }
  }
}

export default new Validation();
