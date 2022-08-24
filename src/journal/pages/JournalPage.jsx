import { AddOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { Button, IconButton, Typography } from "@mui/material";
import { startNewNote } from "../../store/journal/thunks";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  //el typografy se le puede poner el component y variant
  // el variant le pone los estilos que materialUI le pone por defecto
  const { isSaving, active } = useSelector((state) => state.journal);
  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      {/*<Typography component="h1">JournalPage</Typography>
       */}
      {!!active ? <NoteView /> : <NothingSelectedView />}

      {/** */}

      <IconButton
        onClick={onClickNewNote}
        disabled={isSaving}
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
