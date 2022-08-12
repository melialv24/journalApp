import { AddOutlined } from "@mui/icons-material";
import { Button, IconButton, Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  //el typografy se le puede poner el component y variant
  // el variant le pone los estilos que materialUI le pone por defecto
  return (
    <JournalLayout>
      {/*<Typography component="h1">JournalPage</Typography>
       */}
      <NothingSelectedView />

      {/** <NoteView />*/}

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
