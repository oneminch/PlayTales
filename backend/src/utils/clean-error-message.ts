const cleanErrorMessage = (err: Error) => {
  if (err.name.toLowerCase().includes("prisma")) {
    return "An Error Occurred! Please Try Again.";
  } else {
    return err.message;
  }
};

export default cleanErrorMessage;
