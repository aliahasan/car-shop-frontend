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

type RHMultiSelectProps = {
  name: string;
  label?: string;
  disabled?: boolean;
  options: Option[];
  placeholder?: string;
};

const RHMultiSelect = ({
  name,
  label,
  disabled,
  options,
  placeholder,
}: RHMultiSelectProps) => {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel className="text-my-text_clr">{label}</FormLabel>}
          <FormControl>
            <Select
              isMulti
              name={name}
              options={options}
              placeholder={placeholder || "Select options"}
              isDisabled={disabled}
              value={field.value}
              onChange={(selectedOption) => field.onChange(selectedOption)}
              menuPlacement="top"
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default RHMultiSelect;
