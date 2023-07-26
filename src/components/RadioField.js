import React from "react";
import Description from "./Description";

const RadioField = ({ data , namefield, register,errors }) => {
    const error = errors && errors[namefield];
  return (
    <div className="bg-gray-50 grid grid-cols-12 gap-4 my-4">
      {data.validate.options &&
        data.validate.options.map((radiooptions, index) => (
          <div
            key={index}
            className="col-span-6 bg-white rounded-lg p-3 flex items-center justify-between"
          >
            <label>
              {radiooptions.label} &nbsp;
              {data.description && (
                <Description desc={radiooptions.description} />
              )}
            </label>
            <input
              type="radio"
            //   name={namefield}
            {...register(namefield, {
                required: "This field is required.", // Provide the error message here
              })}
              value={radiooptions.value}
              defaultChecked={radiooptions.value == data.validate.defaultValue}
            />
              {error && <p className="text-red-500 text-sm col-span-9">{error.message}</p>}
          </div>
        ))}
    </div>
  );
};

export default RadioField;
