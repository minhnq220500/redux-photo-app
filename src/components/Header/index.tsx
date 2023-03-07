import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import "./Header.scss";

type Props = {};

function Header(props: Props) {
  return (
    // <header className="header">
    //   <Container>
    //     <Row className="justify-content-between">
    //       <Col xs="auto">
    //         <a
    //           className="header__link header__title"
    //           href="https://youtube.com/easyfrontend"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Easy Frontend
    //         </a>
    //       </Col>

    //       <Col xs="auto">
    //         <NavLink
    //           className="header__link"
    //           to="/photos"
    //           //   activeClassName="header__link--active"
    //         >
    //           Redux Project
    //         </NavLink>
    //       </Col>
    //     </Row>
    //   </Container>
    // </header>
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{
            width: "100%",
            height: "5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // padding: "1rem 0",
          }}
        >
          <Box
            sx={{
              width: "20%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            <Box sx={{ fontWeight: "bold", m: 1, fontSize: 16 }}>
              Easy Frontend
            </Box>
          </Box>
          <Box
            sx={{
              width: "20%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <NavLink to={"/photo/list"}>Redux Project</NavLink>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Header;
