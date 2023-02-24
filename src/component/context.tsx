import React, { useEffect, useState } from "react";
import { template, user, FormContextType } from "../data/data";
import Users from "../data/userData.json";

import { nanoid } from "nanoid";
import { log } from "console";

export type userContextProviderProp = {
  children: React.ReactNode;
};

export const FormContext = React.createContext<FormContextType | null>(null);

export const FormPageContext = ({ children }: userContextProviderProp) => {
  const [person, setperson] = useState(Users);

  const Template = template;
  const [data, setdata] = useState({
    firstName: "",
    Date: "",
    email: "",
    Number: 0,
    Country: "",
    Gender: "",
  });

  const onChange = (
    rules: {name: string, value: number | boolean}[],
    event: any
  ) => {
    // ValidateFeild(rules, event.target.value);
    let value=event.target.value
    setdata({
      ...data,
      [event.target.name]: {
        errorMessage: ValidateFeild(rules,value),
      },
    });
  };




  const ValidateFeild = (rules:{name:string,value:number|boolean}[], value: any) => {


    rules.map(rule=>{
      console.log(rule.name)
    })


    console.log(rules)
    // rules.map(rule=>{
    //   console.log('work')
    // })
    console.log(rules.name)
    
    // let errorMessage =rules.forEach((rule:any) => {
    //   switch (rule.name) {
    //     case "max":
    //       if (value?.length > rule.value) {
    //         errorMessage= `Max value should be less then ${rule.value}`;
    //       }
  
    //       break;
    //     case "min":
    //       if (value?.length < rule.value) {
    //         errorMessage= `Min value should be more then ${rule.value}`;
    //       }
  
    //       break;
    //     case "required":
    //       if (rule.value && !value) {
    //           errorMessage= `This feild is required`;
    //       }
  
    //       break;
  
    //     default:
    //       break;
  
    //     return false
    //   }
    //   return errorMessage
    // });
    console.log(rules)
  };


  const onSubmited = (values: user) => {
    console.log("Submit Data");
    // console.log(values);

    const UserInfo = {
      id: nanoid(),
      firstName: values.firstName,
      Date: values.Date,
      email: values.email,
      Number: values.Number,
      Country: values.Country,
      Gender: values.Gender,
    };
    // console.log(UserInfo.Date)
    const userDataInfo: any = [...person, UserInfo];

    setperson(() => userDataInfo);
  };

  return (
    <FormContext.Provider
      value={{
        Template,
        onSubmited,
        data,
        setdata,
        person,
        onChange,
        ValidateFeild,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
