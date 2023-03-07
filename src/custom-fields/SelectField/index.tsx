import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React from "react";

type Option = {
  value: number;
  label: string;
};

type Props = {
  //fast field sẽ truyền vào thêm vài cái props: field là của formik, form là của formik form
  field: any;
  form: any;

  label: "";
  options: Option[];
  disabled: false;
};

const SelectField = (props: Props) => {
  const { field, form, options, label, disabled } = props;

  //những trong field có vài props
  const { name, value, onChange, onBlur } = field;

  //lấy lỗi trả về của formik từ form
  const { errors, touched } = form;
  const showError = errors[name] && touched[name]; //trả về true false

  //tại sao bind vào đúng category nhưng lại ko chọn dc
  //vì khi set value cho select thì phải truyền đủ cả key value chứ ko thể truyền mỗi value dc
  //thứ mình chọn được chỉ là value thôi chứ ko phải là cả key value nên cần phải map lại
  const selectedOption = options.find(
    (option: Option) => option.value === value
  );

  const handleSelectedOptionChange = (selectedOption: SelectChangeEvent) => {
    const selectedValue = selectedOption
      ? selectedOption.target.value
      : selectedOption;

    //fake 1 event
    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
  };

  return (
    <Box sx={{ minWidth: 120, marginY: "20px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id={name}
          label={label}
          {...field}
          value={selectedOption}
          onChange={handleSelectedOptionChange}
        >
          {options?.map((option: Option) => {
            return (
              <MenuItem value={option.value} key={option.value}>
                {option.label}
              </MenuItem>
            );
          })}
        </Select>
        {showError && (
          <Typography color="red" variant="subtitle2">
            {errors[name]}
          </Typography>
        )}
      </FormControl>
    </Box>
  );
};

export default SelectField;
