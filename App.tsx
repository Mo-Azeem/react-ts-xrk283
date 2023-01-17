import * as React from 'react';
import './style.css';
import Select from 'react-select';

interface ISelectOption {
  value: string | number;
  label: "Male" | "Female" | string;
}

const options: ISelectOption[] = [
  { label: 'Male', value: 1 },
  // { label: 'Female', value: 2 },
  {value: 3, label: "Female"}
];

export default function App() {
  return (
    <div>
      <Select 
        options={options} 
        classNamePrefix="react-select" 
        placeholder="Select Gender"
        onChange={(selected_object) => {
          const node = document.createTextNode(JSON.stringify(selected_object))
          document.body.appendChild(node)
        }}
        />
    </div>
  );
}
