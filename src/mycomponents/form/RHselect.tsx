import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import Select from "react-select";

type Option = {
  value: string;
  label: string;
};

type RHSelectProps = {
  name: string;
  label?: string;
  disabled?: boolean;
  options: Option[];
  placeholder?: string;
  isMulti?: boolean;
  required?: boolean;
};

const RHSelect = ({
  name,
  label,
  disabled,
  options,
  placeholder,
  isMulti,
  required,
}: RHSelectProps) => {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Select
              className="text-black"
              isMulti={isMulti}
              required={required}
              name={name}
              options={options}
              placeholder={placeholder || "Select options"}
              isDisabled={disabled}
              value={options.filter((opt) =>
                isMulti
                  ? field.value?.includes(opt.value)
                  : field.value === opt.value
              )}
              onChange={(selected) =>
                field.onChange(
                  isMulti
                    ? (selected as Option[])?.map((opt) => opt.value)
                    : (selected as Option)?.value
                )
              }
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default RHSelect;
