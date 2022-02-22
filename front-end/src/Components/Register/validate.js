const patterns = {
  fullName: new RegExp("^[a-zA-Z\\s]{0,}$"),
  mobileNumber: new RegExp("^\\d{0,}$"),
  password: new RegExp(
    "^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,16}$"
  ),
};
export const validate = {
  isFullName: (fullName) => (patterns.fullName.test(fullName) ? true : false),
  isMobileNumber: (mobileNumber) =>
    patterns.mobileNumber.test(mobileNumber) ? true : false,
  isPassword: (password) => (patterns.password.test(password) ? true : false),
};
