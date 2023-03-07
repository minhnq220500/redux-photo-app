import { FormControl, Typography } from "@mui/material";
import RandomPhoto from "components/RandomPhoto";
import React from "react";
import { Label } from "reactstrap";

type Props = {
  field: any;
  form: any;

  label: "";
};

const RandomPhotoField = (props: Props) => {
  const { field, form, label } = props;

  const { name, value, onChange, onBlur } = field;

  //lấy lỗi trả về của formik từ form
  const { errors, touched } = form;
  const showError = errors[name] && touched[name]; //trả về true false

  const handleImageUrlChange = (newImageUrl: string) => {
    form.setFieldValue(name, newImageUrl);
  };

  return (
    <FormControl>
      {label && <Label for={name}>{label}</Label>}
      <RandomPhoto
        name={name}
        imageUrl={value}
        onImageUrlChange={handleImageUrlChange}
        onRandomButtoBlur={onBlur}
      />

      {showError && (
        <Typography color="red" variant="subtitle2">
          {errors[name]}
        </Typography>
      )}
    </FormControl>
  );
};

export default RandomPhotoField;
