import { AppBar, IconButton, Toolbar } from "@mui/material";
import { MenuOutline } from "@mui/icons-material";
export const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{}}>
      <Toolbar>
        <IconButton>
          <MenuOutlined />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
