import styled from 'styled-components';

function Checkbox({ children, handleChange, checked }) {
  return (
    <label>
      <StCheckBoxInput
        type="checkbox"
        // checked={checked}
        value={children}
        onChange={(e) => handleChange(e)}
      />
      {children}
    </label>
  );
}

export default Checkbox;

const StCheckBoxInput = styled.input``;
