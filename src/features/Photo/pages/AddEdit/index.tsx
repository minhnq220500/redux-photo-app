import { PhotoForm } from "features/Photo/components/PhotoForm";
import { addPhoto, updatePhoto } from "features/Photo/photoSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

type Props = {};

const AddEdit = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { photoId } = useParams();
  const isAddMode = !photoId; //nếu ko có photoId (!false=true) thì isAddMode = true

  const editedPhoto = useSelector((state: any) =>
    state.photos.find((photo: any) => (photo.id as string) === photoId)
  ); // nhớ để ý kiểu dữ liệu

  const initialValue = isAddMode
    ? {
        title: "",
        categoryId: "",
        photo: "",
      }
    : editedPhoto;
  const handleSubmit = (values: any, actions: any) => {
    // console.log({ values, actions });
    // alert(JSON.stringify(values, null, 2));
    // actions.setSubmitting(false);

    if (isAddMode) {
      const action = addPhoto(values);
      console.log({ action });
      dispatch(action);
      navigate("/photo/list");
    } else {
      const action = updatePhoto(values);
      console.log({ action });
      dispatch(action);
      navigate("/photo/list");
    }
  };

  return (
    <div>
      <PhotoForm
        isAddMode={isAddMode}
        initialValues={initialValue}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddEdit;
