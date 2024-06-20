import { useState } from 'react';
import styled from 'styled-components';

function Checkbox({ children, name, handler, checked = false, handleChange }) {
  const [isChecked, setIsChecked] = useState(checked);

  const onChangeHandler = (e) => {
    setIsChecked(e.target.checked);
    handler(e)
    if (handleChange) {
      handleChange(e);
    }
  };
  return (
    <label>
      <StCheckBoxInput
        type="checkbox"
        checked={isChecked}
        value={children}
        name={name}
        onChange={(e) => onChangeHandler(e)}
      />
      {children}
    </label>
  );
}

export default Checkbox;

const StCheckBoxInput = styled.input``;
