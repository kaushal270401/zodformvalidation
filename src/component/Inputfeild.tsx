import { Input, FormControl, FormLabel } from "@chakra-ui/react";
import { useContext } from "react";
import { FormContext } from "./context";

const Inputfeild = (props: any) => {
  const { type, names, placeholder,id, title, onclick,errorMessage} = props;
  const userContext= useContext(FormContext)
  return (
    <FormControl key={id} >
      <FormLabel  htmlFor={names}>{title}</FormLabel>
      <Input
        type={type}
        name={names}
        placeholder={placeholder}
        onChange={(e)=>onclick(names,e)}
      />
      {/* console.log(errorMessage); */}
      {errorMessage && <p>{errorMessage}</p>}
      
    </FormControl>
  );
};
export default Inputfeild;
