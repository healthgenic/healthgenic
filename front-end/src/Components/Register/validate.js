const patterns = {
  fullName: new RegExp("^[a-zA-Z\\s]{0,}$"),
  mobileNumber: new RegExp("^\\d{0,}$"),
};
export const validate = {
  isFullName: (fullName) => (patterns.fullName.test(fullName) ? true : false),
  isMobileNumber: (mobileNumber) =>
    patterns.mobileNumber.test(mobileNumber) ? true : false,
};
