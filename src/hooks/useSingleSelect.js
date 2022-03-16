import React, { useState } from "react";

export const useSingleSelect = (initialValue) => {

  const [selected, setSelected] = useState(initialValue);

  const onChange = (event) => {
    const value = event.target.value;
    if (selected.includes(value)) {
      setSelected([]);
    } else {
      setSelected([value]);
    }
  };

  const isSelected = (value) => {
    return selected.includes(value);
  };

  return { selected, isSelected, onChange };
  
};