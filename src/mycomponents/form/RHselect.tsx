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
  placement?: string;
  options: Option[];
  placeholder?: string;
  isMulti?: boolean;
};

const RHSelect = ({
  name,
  label,
  disabled,
  options,
  placeholder,
  placement,
  isMulti,
}: RHSelectProps) => {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel className="text-my-text_clr">{label}</FormLabel>}
          <FormControl>
            <Select
              isMulti={isMulti}
              name={name}
              options={options}
              placeholder={placeholder || "Select options"}
              isDisabled={disabled}
              value={field.value}
              onChange={(selectedOption) => field.onChange(selectedOption)}
              menuPlacement={placement ? "top" : "bottom"}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default RHSelect;
