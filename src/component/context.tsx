import React, { useEffect, useState } from "react";
import { template, user, FormContextType } from "../data/data";
import Users from "../data/userData.json";

import { nanoid } from "nanoid";

export type userContextProviderProp = {
  children: React.ReactNode;
};

export const FormContext = React.createContext<FormContextType | null>(null);

export const FormPageContext = ({ children }: userContextProviderProp) => {
  const Template = template;
  const [person, setperson] = useState(Users);

  const [data, setdata] = useState({
    firstName: {
      value: "",
      errorMessage: "",
      rules: [
        {
          name: "max",
          value: 6,
        },
        {
          name: "min",
          value: 1,
        },
      ],
    },
    Date: {
      value: "",
      errorMessage: "",
      rules: [
        {
          name: "required",
          value: true,
        },
      ],
    },
    email: {
      value: "",
      errorMessage: "",
      rules: [
        {
          name: "required",
          value: true,
        },
      ],
    },
    Number: {
      value: "",
      errorMessage: "",
      rules: [
        {
          name: "max",
          value: 6,
        },
        {
          name: "min",
          value: 1,
        },
      ],
    },
    Gender: {
      value: "",
      erroMessage: "",
      rules: [
        {
          name: "required",
          value: true,
        },
      ],
    },
  });

  const onChange = (names: any, event: any) => {
    let value = event.target.value;
    // let rules =...data[names].rules

    let rules = data[names].rules;
    // console.log(data[names].rules);
    setdata({
      ...data,
      // [event.target.name]: event.target.value,
      [names]: {
        ...data[names],
        value: event.target.value,
        errorMessage: ValidateFeild(rules, value),
      },
    });
  };

  const ValidateFeild = (
    rules: { name: string; value: number | boolean }[],
    value: any
  ) => {
    let errorMessage = "";
    rules.some((rule: any) => {
      switch (rule.name) {
        case "max":
          if (value?.length > rule.value) {
            errorMessage = `Max value should be less then ${rule.value}`;
            return true;
          }
          break;
          
        case "min":
          if (value?.length < rule.value) {
            errorMessage = `Min value should be more then ${rule.value}`;
            return true;
          }
          break;

        case "required":
          if (rule.value && !value) {
            errorMessage = `This feild is required`;
            return true;
          }
          break;

        default:
          break;
          return false;
      }
      return errorMessage;
    });
  };

  const onSubmited = (values: user) => {
    const UserInfo = {
      id: nanoid(),
      firstName: values.firstName,
      Date: values.Date,
      email: values.email,
      Number: values.Number,
      Country: values.Country,
      Gender: values.Gender,
    };
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
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
