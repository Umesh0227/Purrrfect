import "bootstrap/dist/css/bootstrap.min.css";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const  SignupButton = () => {

<ButtonGroup className="mb-2">
<ToggleButton
  id="toggle-check"
  type="checkbox"
  variant="secondary"
  checked={checked}
  value="1"

>
  Checked
</ToggleButton>
</ButtonGroup>
}
export default SignupButton;