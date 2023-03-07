import { Box } from "@mui/system";
import { Link, Outlet } from "react-router-dom";
import Header from "../../components/Header";

export const WelcomeLayout = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>Welcome to my website</div>
        <ul>
          <li>
            <Link to={"/welcome"}>Go to welcome page</Link>
          </li>
          <li>
            <Link to={"/photo/list"}>Go to photo page</Link>
          </li>
          <li>
            <Link to={"/photo/add-edit"}>Go to add new photo page</Link>
          </li>
          <li>
            <Link to={"/photo/123"}>Go to edit photo page</Link>
          </li>
        </ul>
        <Outlet />
      </Box>
    </>
  );
};
