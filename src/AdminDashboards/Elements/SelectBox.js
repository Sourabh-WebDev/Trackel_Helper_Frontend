import React, { useState } from 'react';
import Select from 'react-select';

export default function SelectBox({ options }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log('Option selected:', selectedOption);
  };

  return (
    <Select
      className='borderColor-yellow'
      value={selectedOption}
      onChange={handleChange}
      options={options}
    />
  );
}
