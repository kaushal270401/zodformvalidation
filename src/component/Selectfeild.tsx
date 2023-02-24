import { FormControl, FormLabel, Select } from "@chakra-ui/react";

const Selectfeild = (props: any) => {
  const { names, placeholder, title, onclick,rules } = props;
  return (
    <FormControl key={names}>
      <FormLabel htmlFor={names}>{title}</FormLabel>
      <Select
        name={names}
        placeholder={placeholder}
        onChange={(e)=>onclick({rules},e)} 
      >
        {props.option.map((opt: any) => {
          return (
            <option key={opt.names} value={opt.names}>
              {opt.names}
            </option>
          );
        })}
      </Select>
    </FormControl>
  );
};
export default Selectfeild;
