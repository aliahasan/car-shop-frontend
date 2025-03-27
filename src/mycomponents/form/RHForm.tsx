import { Form } from "@/components/ui/form";
import { ReactNode } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
};

const RHForm = ({ onSubmit, children }: TFormProps) => {
  const form = useForm();

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    form.reset();
  };
  return (
    <Form {...form} control={form.control}>
      <form onSubmit={form.handleSubmit(submit)}>{children}</form>
    </Form>
  );
};

export default RHForm;
