import { FormGroup, FormHelperText, TextField } from "@mui/material";

type Props = {
  //fast field sẽ truyền vào thêm vài cái props: field là của formik, form là của formik form
  field: any;
  form: any;

  label: "";
  type: "text";
  disabled: false;
};

const InputField = (props: Props) => {
  const { field, form, type, label, disabled } = props;

  //trong field có thêm vài props
  const { name, value, onChange, onBlur } = field;

  //lấy lỗi trả về của formik từ form
  const { errors, touched } = form;
  const showError = errors[name] && touched[name]; //trả về true false

  return (
    <FormGroup>
      <TextField label={label} id={name} {...field} disabled={disabled} />
      {showError && <FormHelperText error>{errors[name]}</FormHelperText>}
    </FormGroup>
  );
};

export default InputField;
