import React from "react";

function FormField({ label, type, name, value, onChange }) {
  return (
    <div>
      <label>
        {label}: 
        <input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  )
}

export default FormField;/*
import React from 'react';
import styled from "styled-components";

interface InputProps {
  hasValue?: boolean;
}
const Input = styled.input<InputProps>`
  &:hover,
  &:focus {
    border-bottom-color: red;
  }
`;


interface FormFieldProps {
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  type: "text" | "color";
}

export function FormField({ label, name, onChange, type, value }: FormFieldProps): JSX.Element {
  return (
    <label>
      <Input name={name} type={type} onChange={onChange} value={value} />
      <span>{label}:</span>
    </label>
  );
}*/