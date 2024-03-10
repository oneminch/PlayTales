import { useEffect, useMemo, useState } from "react";

const REGEX: Record<string, RegExp> = {
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
  password:
    /^\S*(?=\S{8,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/,
  "card number": /^[0-9]{11,14}$/i,
  "expiration date": /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/i,
  "security code": /^[0-9]{3,4}$/i,
  "zip code": /^\d{5}(?:[-\s]\d{4})?$/i
};

const useValidate = (value: string, inputType: string) => {
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value: string) => value.match(REGEX[inputType]);

  const isInvalid = useMemo(() => {
    if (value === "") return false;

    return validate(value) ? false : true;
  }, [value]);

  useEffect(() => {
    if (isInvalid) {
      setErrorMessage(`Please provide a valid ${inputType}`);
    } else {
      setErrorMessage("");
    }
  }, [isInvalid]);

  return { isInvalid, errorMessage };
};

export default useValidate;
