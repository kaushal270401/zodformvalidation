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
  data: user;
  setdata: React.Dispatch<React.SetStateAction<user>>;
  person: any;
  ValidateFeild:any
  onChange:any
};

export interface formtemplate {
  title: string;
  section_title: string;
  fields: {
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
      input_type: "input_feild",
      title: "First Name",
      type: "text",
      names: "firstName",
      placeholder: "Enter a Name",
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
      input_type: "input_feild",
      title: "Date",
      type: "date",
      names: "Date",
      required: true,

      errorMessage: "",
      rules: [
        {
          name: "required",
          value: true
        },
   
      ],
    },
    {
      input_type: "input_feild",
      title: "Email",
      type: "email",
      names: "email",
      placeholder: "Email",

      errorMessage: "",
      rules: [
        {
          name: "required",
          value: true,
        },
      ],
    },
    {
      input_type: "input_feild",
      title: "Number",
      type: "number",
      names: "Number",
      placeholder: "Enter Number",
      errorMessage: "",

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
      input_type: "select_feild",
      type: "select",
      title: "Select the country",
      names: "Country",
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
      input_type: "radio_feild",
      type: "option",
      title: "Gender",
      names: "Gender",
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
      errorMessage: "",
      rules: [
        {
          name: "required",
          value: true,
        },
      ],
    },
  ],
};

