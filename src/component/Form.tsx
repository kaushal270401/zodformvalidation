import {
  Heading,
  Container,
  Button,
  Flex,
  Grid,
} from "@chakra-ui/react";
import "./Form.css";
import { useContext } from "react";
import Inputfeild from "./Inputfeild";
import Selectfeild from "./Selectfeild";
import Radiofeild from "./Radiofeild";
import { FormContext } from "./context";

const Form: React.FC<{template:any ,onSubmited:any}> = ({ template, onSubmited }) => {

  const userContext =useContext(FormContext)

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmited(userContext?.data);
  };


  let { title, fields, section_title } = template;

  const renderFields = (fields: any) => {
    return fields.map((fields: any) => {
      const { input_type } = fields;

      switch (input_type) {
        case "input_feild":
          return <Inputfeild {...fields}  onclick={userContext?.onChange}  errormessage={fields.errormessage} />;

        case "select_feild":
          return <Selectfeild {...fields} onclick={userContext?.onChange} />;

        case "radio_feild":
          return <Radiofeild {...fields} onclick={userContext?.onChange} />;
      }
    });
  };

  return (
    <Flex alignItems="center" justifyContent="center">
      <Container size="lg" variant="colorful">
        <form onSubmit={handleSubmit}>
          <Heading as="h1" size="3xl" mb={10}>
            {title}
          </Heading>
          <Heading size={{ base: "md", md: "xl" }} mb={5} as="h6">
            {section_title}
          </Heading>
          <Grid
            templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,2fr)" }}
            gap={6}
            mb={5}
          >
            {renderFields(fields)}
          </Grid>
          <Button variant='outline' type="submit">
            Submit
          </Button>
        </form>
      </Container>
    </Flex>
  );
};

export default Form;
