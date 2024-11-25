import React from "react";
import "./FormComponent.scss";

const FormComponent = ({ formFields, buttonText, onSubmit }) => {
  return (
    <form className="form-component" onSubmit={onSubmit}>
      {formFields.map(({ label, id, name, type, placeholder }) => (
        <label key={id} className="form-component__label" htmlFor={id}>
          {label}
          <input
            className="form-component__input"
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
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
