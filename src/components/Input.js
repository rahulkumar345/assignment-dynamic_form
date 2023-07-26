import React from "react";
import Description from "./Description";

const Input = ({ data, namefield, register, errors }) => {
    const error = errors && errors[namefield];

  return (
    <div className="my-2 bg-gray-50 rounded-lg p-6 grid grid-cols-12 w-full">
      <h1 className="col-span-3 font-bold flex items-center">
        {data.label} &nbsp;
        {data.description && <Description desc={data.description} />}
      </h1>

      <input
        type="text"
        className="col-span-9 py-2 px-4 text-sm rounded-lg"
        placeholder={data.placeholder}
        readOnly={data.validate && data.validate.immutable ? true : false}
        // name={namefield}
        {...register(namefield, {
          required: "This field is required.", // Provide the error message here
        })}
      />

      {error && <p className="text-red-500 text-sm col-span-9">{error.message}</p>}
    </div>
  );
};



  

export default Input;
