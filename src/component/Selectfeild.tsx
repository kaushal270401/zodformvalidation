import { FormControl, FormLabel, Select } from "@chakra-ui/react";

const Selectfeild = (props: any) => {
  const { names, placeholder, title, onclick,rules,errorMessage } = props;
  return (
    <FormControl key={names}>
      <FormLabel htmlFor={names}>{title}</FormLabel>
      <Select
         onChange={(e)=>onclick(rules,e)}
        name={names}
        placeholder={placeholder}
      >
        {props.option.map((opt: any) => {
          return (
            <option key={opt.names} value={opt.names}    >
              {opt.names}
            </option>
          );
        })}
      </Select>
      <p className="Err-mess">{errorMessage}</p>
    </FormControl>
  );
};
export default Selectfeild;
