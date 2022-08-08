import { Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";

export const JournalPage = () => {
  //el typografy se le puede poner el component y variant
  // el variant le pone los estilos que materialUI le pone por defecto
  return (
    <JournalLayout>
      <Typography component="h1">JournalPage</Typography>
    </JournalLayout>
  );
};
