import React from 'react';
import Select, { MultiValue, GroupBase, components, DropdownIndicatorProps } from 'react-select';
import { OptionType } from './type';
import { customSelectStyles } from './reactSelectStyles';
import { SearchIcon } from '../Icons/IconComponents';

interface CustomMultiSelectProps {
  options: OptionType[];
  value: OptionType[];
  onChange: (newValue: MultiValue<OptionType>) => void;
  placeholder?: string;
  isDisabled?: boolean;
  components?: any;
}

const DefaultDropdownIndicator = (props: DropdownIndicatorProps<OptionType, true>) => {
  return (
    <components.DropdownIndicator {...props}>
      <SearchIcon className='text-[FF7506]'/>
    </components.DropdownIndicator>
  );
};

const CustomMultiSelect: React.FC<CustomMultiSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Chọn...',
  isDisabled = false,
  components: userComponents = {}, 
}) => {
  // Các component mặc định của bạn
  const defaultComponents = {
    DropdownIndicator: DefaultDropdownIndicator,
  };

  // Gộp components mặc định với userComponents
  // userComponents có thể override từng thành phần tuỳ ý
  const mergedComponents = {
    ...defaultComponents,
    ...userComponents,
  };

  return (
    <Select<OptionType, true, GroupBase<OptionType>>
      isMulti
      options={options}
      value={value}
      onChange={onChange}
      closeMenuOnSelect={false}
      placeholder={placeholder}
      styles={customSelectStyles}
      isDisabled={isDisabled}
      components={mergedComponents}
    />
  );
};

export default CustomMultiSelect;
