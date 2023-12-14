import { Grid, Paper, Stack } from "@mui/material";
import { useTaskContext } from "../context/taskContext";
import { useEffect } from "react";
import TableComponent from "../components/TableComponent";
import { FormCreateTaskComponent } from "../components/FormCreateTaskComponent";

export const TasksPage = () => {
  const { getTasks, tasks, loading } = useTaskContext();

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
        <FormCreateTaskComponent />
        <Stack direction="row" alignItems="center" justifyContent="end" mb={5}>
          {loading ? (
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
            <TableComponent data={tasks} />
          )}
        </Stack>
      </Grid>
    </>
  );
};
