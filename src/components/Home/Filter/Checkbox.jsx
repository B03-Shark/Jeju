import { useState } from 'react';
import styled from 'styled-components';

function Checkbox({ children, name, handler, checked = false, handleChange }) {
  const [isChecked, setIsChecked] = useState(checked);

  const onChangeHandler = (e) => {
    setIsChecked(e.target.checked);
    handler(e);
    if (handleChange) {
      handleChange(e);
    }
  };
  return (
    <StLabel>
      <StCheckBoxInput
        type="checkbox"
        checked={isChecked}
        value={children}
        name={name}
        onChange={(e) => onChangeHandler(e)}
      />
      {children}
    </StLabel>
  );
}

export default Checkbox;

const StLabel = styled.label`
  cursor: pointer;
`;
const StCheckBoxInput = styled.input`
  accent-color: #ffba59;
`;
