import { Input, FormControl, FormLabel } from "@chakra-ui/react";
import { useContext } from "react";
import { FormContext } from "./context";

const Inputfeild = (props: any) => {
  const { type, names, placeholder, required,rules, title, onclick} = props;
  const userContext= useContext(FormContext)
  return (
    <FormControl key={names} >
      <FormLabel htmlFor={names}>{title}</FormLabel>
      <Input
        type={type}
        name={names}
        // key={names}
        placeholder={placeholder}
        onChange={(e)=>onclick({rules},e)}
      />
    </FormControl>
  );
};
export default Inputfeild;
