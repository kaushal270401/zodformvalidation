import React, { useRef } from "react";
import Form from "./Form";
import { z } from "zod";
import { SubmitHandler } from "react-hook-form";

export interface formtemplate {
  title: string;
  section_title: string;
  fields: (
    | {
        title: string;
        type: string;
        names: string;
      }
    | {
        type: string;
        title: string;
        names: string;
        option: {
          names: string;
        }[];
      }
  )[];
}

export const template: formtemplate = {
  title: " Application Form",
  section_title: "login",
  fields: [
    {
      title: "First Name",
      type: "text",
      names: "firstname",
    },
    {
      title: "last Name",
      type: "text",
      names: "lastname",
    },

    {
      title: "Email",
      type: "email",
      names: "email",
    },
    {
      type: "select",
      title: "select the country",
      names: "select",
      option: [
        {
          names: "select",
        },
        {
          names: "INDIA",
        },
        {
          names: "PAKISTAN",
        },
        {
          names: "CHINA",
        },
        {
          names: "RUSSIA",
        },
        {
          names: "USA",
        },
      ],
    },
  ],
};

export const DataSchema = z.object({
  firstname: z
    .string()
    .trim()
    .min(1, "please enter a valid input")
    .max(20, "First name cannot be 20 characters long"),
  lastname: z
    .string()
    .trim()
    .max(10, "last name cannot be more then 20 character")
    .min(1, "Please enter a valid input"),
  email: z.string().email(),
  select: z.string(),
});

function SignUpForm() {
  type schema = z.infer<typeof DataSchema>;

  const onSubmit: SubmitHandler<schema> = (values) => {
    console.log(values);
  };

  return (
    <>
      <Form template={template} onSubmit={onSubmit} />
    </>
  );
}

export default SignUpForm;
