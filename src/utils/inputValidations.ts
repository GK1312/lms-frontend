export const email_validation = {
  name: "email",
  label: "Email address",
  type: "email",
  id: "email",
  placeholder: "Enter email address",
  validation: {
    required: {
      value: true,
      message: "Email address is required.",
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Invalid Email address.",
    },
  },
};
export const mobile_number_validation = {
  name: "mobileNumber",
  label: "Mobile Number",
  type: "tel",
  id: "mobileNumber",
  placeholder: "Enter mobile number",
  validation: {
    required: {
      value: true,
      message: "Mobile number is required.",
    },
    pattern: {
      value: /^[6789]\d{9}$/,
      message:
        "Invalid mobile number. Must be 10 digits starting with 6, 7, 8, or 9.",
    },
    minLength: {
      value: 10,
      message: "Mobile number must be exactly 10 digits.",
    },
    maxLength: {
      value: 10,
      message: "Mobile number must be exactly 10 digits.",
    },
  },
};
export const password_validation = {
  name: "password",
  label: "Password",
  type: "password",
  id: "password",
  placeholder: "Enter password",
  validation: {
    required: {
      value: true,
      message: "Password is required.",
    },
    minLength: {
      value: 8,
      message: "Min 8 characters",
    },
  },
};
export const search_validation = {
  name: "search",
  label: "Search",
  type: "text",
  id: "search",
  placeholder: "Search for a course",
  validation: {
    required: {
      value: true,
      message: "Course name is required.",
    },
    minLength: {
      value: 3,
      message: "Search name has to be more than 3 characters",
    },
  },
};