import { Box } from "@mui/system";
import { Navbar } from "../components";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar />
      {/** SideBar */}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/** Toolbar */}

        {children}
      </Box>
    </Box>
  );
};
