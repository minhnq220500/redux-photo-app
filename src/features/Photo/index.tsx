import React from "react";
import { Link } from "react-router-dom";
import { Pink } from "../../assests";
import { Box } from "@mui/system";
import { useSelector } from "react-redux/es/exports";

type Props = {};

const Photo = (props: Props) => {
  const photos = useSelector((state: any) => state.photos);
  console.log(photos);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "25rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={Pink}
          alt="hinh mau hong"
          width="100%"
          height="100%"
          object-fit="contain"
        />
      </Box>
      <div>
        <Link to={"/photo/add-edit"}> Add New Photo</Link>
      </div>
    </>
  );
};

export default Photo;
