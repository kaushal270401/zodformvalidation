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
  const [isvalid, setIsvalid] = useState(true);
  const [data, setdata] = useState({
    firstName: {
      value: "",
      errorMessage: "",
    },
    Date: {
      value: "",
      errorMessage: "",
    },
    email: {
      value: "",
      errorMessage: "",
    },
    Number: {
      value: "",
      errorMessage: "",
    },
    Country: {
      value: "",
      erroMessage: "",
    },
    Gender: {
      value: "",
      erroMessage: "",
    },
  });

  const onChange = (rules: {name:string,value:any}[], event: any) => {
    let value = event.target.value;
    let names = event.target.name;
    setdata({
      ...data,
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
        case "required":
          if (rule.value && !value) {
            errorMessage = `This feild is required`;
            return true;
          }
          break;

        case "max":
          if (value?.length > rule.value) {
            errorMessage = `Max value should be less then ${rule.value}`;
            console.log(errorMessage);
            return true;
          }
          break;

        case "min":
          if (value?.length < rule.value) {
            errorMessage = `Min value should be more then ${rule.value}`;
            return true;
          }
          break;

        default:
          break;
          return false;
      }
    });
    {
      errorMessage ? setIsvalid(true) : setIsvalid(false);
    }
    return errorMessage;
  };

  const onSubmited = (values: any) => {
    // ValidateFeild(rules, values)
    const UserInfo = {
      id: nanoid(),
      firstName: values.firstName.value,
      Date: values.Date.value,
      email: values.email.value,
      Number: values.Number.value,
      Country: values.Country.value,
      Gender: values.Gender.value,
    };

    if (
      UserInfo.firstName === "" ||
      UserInfo.Date === "" ||
      UserInfo.Gender === "" ||
      UserInfo.email === "" ||
      UserInfo.Country === ""
    ) {
      return;
    }

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
        isvalid,
        ValidateFeild,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
