const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
const passwordRegex =
  /^\S*(?=\S{8,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;

const validate = (value: string, regex: RegExp) => regex.test(value);

export { emailRegex, passwordRegex, validate };
