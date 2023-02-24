import {  FormControl,FormLabel ,Radio,RadioGroup,} from "@chakra-ui/react";


const Radiofeild=(props:any)=>{
    const {
        names,
        required,
        title,
        onclick,
        rules
      } = props;
    return(
        <FormControl key={names}>
        <FormLabel htmlFor={names}>{title}</FormLabel>
        <RadioGroup>
          {props.option.map((opt: any) => {
            return (
              <Radio
                name={names}
                onChange={(e)=>onclick({rules},e)}                
                key={opt.names}
                pr={3}
                value={opt.names}
                required={required}
              >
                {opt.names}
              </Radio>
            );
          })}
        </RadioGroup>
      </FormControl>
    )
}
export default Radiofeild;