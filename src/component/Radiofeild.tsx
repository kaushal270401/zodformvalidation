import {  FormControl,FormErrorMessage,FormLabel ,Radio,RadioGroup,} from "@chakra-ui/react";


const Radiofeild=(props:any)=>{
    const {
        names,
        required,
        title,
        onclick,
        rules,
        errorMessage
      } = props;
    return(
        <FormControl key={names}>
        <FormLabel htmlFor={names}>{title}</FormLabel>
        <RadioGroup>
          {props.option.map((opt: any) => {
            return (
              <Radio
                name={names}
                onChange={(e)=>onclick(rules,e)}                
                key={opt.names}
                pr={3}
                value={opt.names}
              >
                {opt.names}
              </Radio>
            );
          })}
        </RadioGroup>
        <p>{errorMessage}</p>
      </FormControl>
    )
}
export default Radiofeild;