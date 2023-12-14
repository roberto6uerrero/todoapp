import { Grid, Paper, Stack } from "@mui/material";
import { useTaskContext } from "../context/taskContext";
import { useEffect } from "react";
import { CreateTaskView, ShowTasksView } from "../views";

export const TasksPage = () => {
  const { getTasks, tasks } = useTaskContext();
  useEffect(() => {
    getTasks();
  }, [])

  return (
    <>
      <Grid item xs={12} md={12} lg={12}>
        {/* <Box mb={5} item xs={6} md={6} lg={6}>
        <Button variant="outlined" type="submit" fullWidth>
          Agregar tarea
        </Button>
        </Box> */}
        <CreateTaskView />
        <Stack direction="row" alignItems="center" justifyContent="end" mb={5}>
          {!tasks ? (
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              Cargando ...
            </Paper>
          ) : (
            <ShowTasksView data={tasks} />
          )}
        </Stack>
      </Grid>
    </>
  );
};
