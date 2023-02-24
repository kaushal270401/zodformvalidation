import Form from "./Form";
import { useContext, useState } from "react";
import { FormContext } from "./context";


function SignUpForm() {
  const[Error,setError]=useState('')
  const userContext=useContext(FormContext)
  return (
    <>
      <Form template={userContext?.Template} onSubmited={userContext?.onSubmited}  />
    </>
  );
}

export default SignUpForm;
