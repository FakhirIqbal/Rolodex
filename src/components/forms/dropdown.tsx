import React from "react";
import { useForm } from "react-hook-form";

const CustomDropdown = ({
  label,
  options,
  register,
  name,
  className,
  onChange,
  defaultValue,
  disabled,
  required,
}: any) => {
  return (
    <div
      className={`block text-sm  font-semibold ${required ? "required" : ""}`}
    >
      <label className="custom-dropdown-label">
        {label} {required && <span className="required-indicator">*</span>}
      </label>
      {/* <label className={`block text-sm  font-semibold `}>Category*</label> */}
      <select
        {...register(name, { required: required })}
        className={`custom-dropdown ${className || ""}`}
        onChange={onChange}
        defaultValue={defaultValue}
        disabled={disabled}
      >
        <option value="" disabled>
          Select an option
        </option>

        {options.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {required && (
        <span className="error-message">
          {register(name)?.errors?.required && "This field is required"}
        </span>
      )}
    </div>
  );
};
export default CustomDropdown;
