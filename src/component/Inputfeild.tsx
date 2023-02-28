import { Input, FormControl, FormLabel, FormErrorIcon, FormErrorMessage } from "@chakra-ui/react";
import { useContext } from "react";
import { FormContext } from "./context";

const Inputfeild = (props: any) => {
  const { type, names, placeholder,id, title, onclick,errorMessage,rules} = props;
  const userContext= useContext(FormContext)
  const value=userContext?.data[names].value
  return (
    <FormControl key={id} >
      <FormLabel  htmlFor={names}>{title}</FormLabel>
      <Input
        type={type}
        name={names}
        value={value}
        placeholder={placeholder}
        onChange={(e)=>onclick(rules,e)}
        // onBlur={userContext?.ValidateFeild(rules,value)}
      />
       <p className="Err-mess">{errorMessage}</p>
    </FormControl>
  );
};
export default Inputfeild;
