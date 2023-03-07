import { Box, Button } from "@mui/material";
import React, { useState } from "react";

//tại sao vừa có RandomPhoto và RandomPhotoField? tại sao ko gọp lại cả 2
//RandomPhoto là UI control

//formik là thằng có dữ liệu
//RandomPhoto là 1 DOM component, và nó chỉ biết render UI thôi
//nên cần có 1 cầu nối, ở đây là RandomPhotoField, để giúp lấy dữ liệu của formik và bind vào RandomPhotoField
//vậy tại sao lại ko gọp RandomPhoto và RandomPhotoField luôn?
//nếu như sài trực tiếp thì cần phải xử lý onChange, onBlur trong RandomPhoto
//nếu như làm như vậy thì component này ko còn là DOM nữa, phải xử lý state các kiểu thì làm v sẽ ko còn tái xử dụng cho những form
//khác nữa(Form của React) mà chỉ dùng dc cho Formik th

type Props = {
  name: "";
  imageUrl: "";
  onImageUrlChange: any;
  onRandomButtoBlur: any;
};

const getRandomImageUrl = () => {
  const randomId = Math.trunc(Math.random() * 2000);
  return `http://picsum.photos/id/${randomId}/300/300`;
};

const RandomPhoto = (props: Props) => {
  const { name, imageUrl, onImageUrlChange, onRandomButtoBlur } = props;
  const handleRandomPhotoClick = async () => {
    if (onImageUrlChange) {
      const randomImageUrl = getRandomImageUrl();
      onImageUrlChange(randomImageUrl);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Button
        variant="outlined"
        name={name}
        color="primary"
        onClick={handleRandomPhotoClick}
        onBlur={onRandomButtoBlur}
      >
        Random a photo
      </Button>

      {imageUrl && (
        <Box
          sx={{
            width: "100%",
            height: "20rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <img
            src={imageUrl}
            alt="Opps... not found. Please click Random button again."
            width="100%"
            height="100%"
            object-fit="contain"
            onError={handleRandomPhotoClick}
          />
        </Box>
      )}
    </Box>
  );
};

export default RandomPhoto;
