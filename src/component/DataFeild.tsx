import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useContext } from "react";
import { FormContext } from "./context";


const DataFeild = () => {

    const  userContext =useContext(FormContext)
    // console.log(userContext?.users)
  return (
    <TableContainer >
      <Table size={"md"} variant='striped' >
        <Thead>
            <Tr>
                {userContext?.Template.fields.map((feild:any)=>{
                    return(
                        <Th key={feild.names}>{feild.names}</Th>
                    )
                })}
            </Tr>
        </Thead>
        <Tbody>
            {userContext?.person.map((person:any , index:any)=>(
                <Tr key={index}>
                    <Td>{person.firstName}</Td>
                    <Td>{person.Date}</Td>
                    <Td>{person.email}</Td>
                    <Td>{person.Number}</Td>
                    <Td>{person.Country}</Td>
                    <Td>{person.Gender}</Td>
                </Tr>
            ))}
         
        </Tbody>
      </Table>
    </TableContainer>
  );
};
export default DataFeild;
