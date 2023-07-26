import React, { useRef, useState } from "react";
import Description from "./Description";

const SwitchField = ({ data, namefield, register, errors }) => {
  const checkboxRef = useRef(null);
  const { ref, ...rest } = register(namefield);
  const [animateToggle, setAnimateToggle] = useState(false);

  const handleToggle = () => {
    if (checkboxRef.current.checked) {
      checkboxRef.current.checked = false;
      setAnimateToggle(false);
    } else {
      checkboxRef.current.checked = true;
      setAnimateToggle(true);
    }
  };

  // Check if the current field has validation errors
  const hasError = errors && errors[namefield];

  return (
    <div className={`my-2 bg-gray-50 rounded-lg p-6 w-full flex items-center ${hasError ? 'border border-red-500' : ''}`}>
      <h1 className="col-span-3 font-bold flex items-center">
        {data.label} &nbsp;
        {data.description && <Description desc={data.description} />}
      </h1>

      <div className="ml-4">
        <input
          type="checkbox"
          ref={(e) => {
            ref(e);
            checkboxRef.current = e;
          }}
          name={namefield}
          {...register(namefield, {
            required: true
          })}
          {...rest}
        />
      </div>
    </div>
  );
};

export default SwitchField;
