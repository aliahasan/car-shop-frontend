import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  multiple?: boolean;
};

const RHInput = ({
  type,
  name,
  label,
  placeholder,
  disabled,
  required,
  multiple,
}: TInputProps) => {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              {...field}
              value={field.value ?? ""}
              type={type}
              disabled={disabled}
              required={required}
              placeholder={placeholder}
              multiple={multiple}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 
              text-sm md:text-base lg:text-lg transition-all duration-300"
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default RHInput;
