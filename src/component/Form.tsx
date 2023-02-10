import {
  FormControl,
  Select,
  Input,
  FormLabel,
  Heading,
  Container,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { DataSchema, formtemplate } from "./SignUpform";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type schema = z.infer<typeof DataSchema>;



// Reusable Form Component
const Form: React.FC<{ template: formtemplate; onSubmit:any}> = ({ template,onSubmit}) => {

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<schema>({
    resolver: zodResolver(DataSchema),
  });

  let { title, fields } = template;

  const renderFields = (fields: any) => {
    return fields.map((fields: any) => {
      const { title, type, names } = fields;

      switch (type) {
        case "text":
          return (
            <FormControl key={names}>
              <FormLabel htmlFor={names}>{title}</FormLabel>
              <Input type={type} id={names} {...register(names)} />
              <p>{names==='firstname' && errors.firstname?.message}</p>
              <p>{names==='lastname' && errors.lastname?.message}</p>

            </FormControl>
          );
        case "email":
          return (
            <FormControl key={names}>
              <FormLabel htmlFor={names}>{title}</FormLabel>
              <Input type={type} id={names} {...register(names)} />
              <p>{errors.email?.message}</p>
            </FormControl>
          );
        case "select":
          return (
            <FormControl key={names}>
              <FormLabel htmlFor={names}>{title}</FormLabel>
              <Select {...register(names)} name={names} id={names}>
                {fields.option.map((opt: any) => {
                  return <option>{opt.names}</option>;
                })}
              </Select>
                <p>{errors.select?.message}</p>
            </FormControl>
          );
      }
    });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading mb={4}>{title}</Heading>
        {renderFields(fields)}
        <Button mt={5} type="submit" colorScheme="blackAlpha" className="btn">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Form;
