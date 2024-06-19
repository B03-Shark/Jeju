import styled from 'styled-components';

function Checkbox({ children, checked, handleChange }) {
  return (
    <label>
      <StCheckBoxInput
        type="checkbox"
        checked={checked}
        onChange={({ target: { checked } }) => handleChange(checked)}
      />
      {children}
    </label>
  );
}

export default Checkbox;

const StCheckBoxInput = styled.input``;
