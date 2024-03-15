import React from "react";

const RadioInput = ({
  title,
  value,
  label,
  register,
  watch,
  name,
  ...rest
}: any) => {
  return (
    <div className="flex items-center mb-4">
      <input
        type="radio"
        value={value}
        name={name}
        {...register(name, { required: ` Company Type is required` })}
        checked={watch(name) === value}
        {...rest}
        className="w-4 h-4 text-blue-600  bg-gray-200 border-gray-300 focus:ring-primary "
      />
      <label
        htmlFor="default-radio-1"
        className="ms-2 text-sm font-semibold  text-gray-900 "
      >
        {title}
      </label>
    </div>
  );
};

export default RadioInput;
