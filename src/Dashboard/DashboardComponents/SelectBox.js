import React, { useState } from 'react';
import Select from 'react-select';

export default function SelectBox({options}) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log('Option selected:', selectedOption);
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
    />
  );
}
