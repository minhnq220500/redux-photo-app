import { Box, Button, FormGroup } from "@mui/material";
import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import InputField from "custom-fields/InputField";
import RandomPhotoField from "custom-fields/RandomPhotoField";
import SelectField from "custom-fields/SelectField";
import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";

type PhotoFormType = {
  isAddMode: boolean;
  initialValues: any;
  onSubmit: any;
};

export const PhotoForm = (props: PhotoFormType) => {
  // const initialValue = {
  //   title: "",
  //   categoryId: "",
  //   photo: "",
  // };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field is required."),
    categoryId: Yup.string().required("This field is required."),
    photo: Yup.string().required("This field is required."),
  });

  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps: any) => {
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });

        return (
          <Box sx={{ height: "70%" }}>
            <Form>
              <FastField
                //props của fast field
                name="title"
                component={InputField}
                //props của InputField
                label="Title"
              />

              <FastField
                //props của fast field
                name="categoryId"
                component={SelectField}
                //props của InputField
                label="Category"
                options={PHOTO_CATEGORY_OPTIONS}
              />

              <FastField
                name="photo"
                component={RandomPhotoField}
                label="Photo"
              />

              <FormGroup>
                <Box sx={{ marginY: "20px" }}>
                  <Button
                    type="submit"
                    color={props.isAddMode ? "primary" : "success"}
                    variant="outlined"
                  >
                    {props.isAddMode ? "Add to album" : "Update photo"}
                  </Button>
                </Box>
              </FormGroup>
            </Form>
          </Box>
        );
      }}
    </Formik>
  );
};
