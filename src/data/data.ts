import { number } from "zod";

export interface user {
  id?: string;
  firstName: string;
  Date: string;
  email: string;
  Number: number;
  Country: string;
  Gender: string;
}
export type FormContextType = {
  Template: formtemplate;
  onSubmited: (value: user) => void;
  data: any;
  setdata: React.Dispatch<React.SetStateAction<any>>;
  person: any;
  onChange: any;
};

export interface formtemplate {
  title: string;
  section_title: string;
  fields: {
    id: number;
    input_type: string;
    title: string;
    type: string;
    names: string;
    placeholder?: string;
    errorMessage?: string;
    rules?: {
      name: string;
      value: number | boolean;
    }[];
    required?: Boolean;
    option?: {
      names: string;
      type: string;
    }[];
  }[];
}

export const template: formtemplate = {
  title: " Simple Form",
  section_title: "Please fill the form",
  fields: [
    {
      id: 1,
      input_type: "input_feild",
      title: "First Name",
      type: "text",
      names: "firstName",
      placeholder: "Enter a Name",
      errorMessage: "data.firstName.errorMessage",
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
    {
      id: 2,

      input_type: "input_feild",
      title: "Date",
      type: "date",
      names: "Date",
      required: true,
      errorMessage: "data.Date.errorMessage",
      rules: [
        {
          name: "required",
          value: true,
        },
      ],
    },
    {
      id: 3,

      input_type: "input_feild",
      title: "Email",
      type: "email",
      names: "email",
      placeholder: "Email",
      errorMessage: 'data.email.errorMessage',
      rules: [
        {
          name: "required",
          value: true,
        },
      ],
    },
    {
      id: 4,

      input_type: "input_feild",
      title: "Number",
      type: "number",
      names: "Number",
      placeholder: "Enter Number",
      errorMessage: 'data.Number.errorMessage',

      rules: [
        {
          name: "min",
          value: 1,
        },
        {
          name: "max",
          value: 6,
        },
      ],
    },
    {
      id: 5,

      input_type: "select_feild",
      type: "select",
      title: "Select the country",
      names: "Country",
      errorMessage:'data.Country.errorMEssage',
      placeholder: "select a country",
      option: [
        {
          names: "India",
          type: "select",
        },
        {
          names: "UK",
          type: "select",
        },
        {
          names: "China",
          type: "select",
        },
        {
          names: "Russia",
          type: "select",
        },
        {
          names: "USA",
          type: "select",
        },
      ],
      errorMessage: "",
      rules: [
        {
          name: "required",
          value: true,
        },
      ],
    },
    {
      id: 6,

      input_type: "radio_feild",
      type: "option",
      title: "Gender",
      names: "Gender",
      errorMessage:'data.Gender.errorMEssage',
      option: [
        {
          names: "Male",
          type: "option",
        },
        {
          names: "Female",
          type: "option",
        },
      ],
      rules: [
        {
          name: "required",
          value: true,
        },
      ],
    },
  ],
};
