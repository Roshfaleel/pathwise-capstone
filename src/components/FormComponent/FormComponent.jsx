import React from "react";
import "./FormComponent.scss";

const FormComponent = ({ formFields, buttonText, onSubmit, onChange }) => {
  return (
    <form className="form-component" onSubmit={onSubmit}>
      {formFields.map(({ label, id, name, type, placeholder, value }) => (
        <label key={id} className="form-component__label" htmlFor={id}>
          {label}
          <input
            className="form-component__input"
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value || ""}
            onChange={(e) => onChange(e, name)}
          />
        </label>
      ))}
      <button className="form-component__button" type="submit">
        {buttonText}
      </button>
    </form>
  );
};

export default FormComponent;
