import Box from "@mui/material/Box";
import { PhotoForm } from "features/Photo/components/PhotoForm";
import { Orange } from "../../assests";

export const WelcomePage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "70rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <img
        src={Orange}
        alt="hinh mau cam"
        width="100%"
        height="70%"
        object-fit="contain"
      />
    </Box>
  );
};
