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
  isvalid: any;
  ValidateFeild: any;
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
    // errorMessage?: string;
    rules?: {
      name: string;
      value: number | boolean;
    }[];
    // required?: Boolean;
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
      // value:'userContext?.data[names]'
      placeholder: "Enter a Name",
      rules: [
        {
          name: "required",
          value: true,
        },
        {
          name: "max",
          value: 10,
        },
        {
          name: "min",
          value: 2,
        },
      ],
    },
    {
      input_type: "input_feild",
      title: "Date",
      type: "date",
      names: "Date",
      rules: [
        {
          name: "required",
          value: true,
        },
      ],
    },
    {
      input_type: "input_feild",
      title: "Email",
      type: "email",
      names: "email",
      placeholder: "Email",
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
      rules: [
        {
          name: "required",
          value: true,
        },
        {
          name: "min",
          value: 1,
        },
        {
          name: "max",
          value: 10,
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
      rules: [
        {
          name: "required",
          value: true,
        },
      ],
    },
  ],
};
