import React from "react";

function TextFeild({
  value,
  max,
  min,
  name,
  register,
  paswordlable,
  placeholder,
  inputType,
  error,
  label,
  maxLength,
  minLength,
  validate,
  className,
  formvalidate,
  styleInput,
  styleLabel,
  required,
  pattern,
}: any) {
  return (
    <div className={`w-full ${className}`}>
      <label
        htmlFor="firstname"
        className={`block text-sm  font-semibold ${styleLabel} `}
      >
        {label}
      </label>
      <input
        pattern={pattern}
        max={max}
        min={min}
        name={name}
        type={inputType}
        placeholder={placeholder}
        className={`  w-full border-2 border-gray-200 focus:ring-0   mt-1 p-3 !py-2.5   focus:ring-primary !outline-none focus:border-primary block  shadow-sm sm:text-sm  rounded-lg ${styleInput}  ${
          error?.Length ? "!border-[8px] outline-2 !border-red-700" : ""
        } `}
        {...register(name, {
          ...(required ? { required: ` ${label} is required` } : {}),
          validate,
          maxLength,
          minLength,
        })}
      />
      <span className="text-red-400 block text-[12px] mt-1  font-poppin font-normal">
        {error}
      </span>
    </div>
  );
}

export default TextFeild;
