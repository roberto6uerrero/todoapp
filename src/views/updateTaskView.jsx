import { Box, Button, Grid, Paper, Stack, TextField } from "@mui/material";
import { useTaskContext } from "../context/taskContext";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { taskSchema } from "../schemas/taskSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const UpdateTaskView = ({ id }) => {
  const { task, getTask, snackbar, updateTask } = useTaskContext();
  const { openSnackbar } = snackbar;

  useEffect(() => {
    getTask(id);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(taskSchema),
  });

  useEffect(() => {
    if (task) {
      const { title, description } = task;
      setValue("title", title);
      setValue("description", description);
    }
  }, [task, setValue]);

  useEffect(()=> {
    openSnackbar({
      state: true,
      type: "error",
      message: "Entrada incorrecta, campos invalidos",
    })

  }, [errors])

  const onSubmit = (formData) => {
    console.log("on submit update");
    formData.state = "pending";
    const data = JSON.stringify(formData);
    updateTask(id, data).then((res) => {
      if (res) {
        openSnackbar({
          state: true,
          type: "success",
          message: "Tarea creada exitosamente",
        });
      }
    });
  };
  return (
    <Grid item xs={12} md={12} lg={12}>
      <Stack direction="row" alignItems="center" justifyContent="end" mb={5}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {!task ? (
            "Cargando ..."
          ) : (
            <Box
              component="form"
              autoComplete="off"
              mb={5}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12}>
                  <TextField
                    label="title"
                    variant="outlined"
                    id="title"
                    type="text"
                    {...register("title")}
                    {...register("title")}
                    error={!!errors.title}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Description"
                    variant="outlined"
                    id="description"
                    {...register("description")}
                    {...register("description")}
                    error={!!errors.description}
                    type="text"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button type="submit" variant="contained" color="primary" size="large">
                  Actualizar
                  </Button>
                </Grid>
              </Grid>
            </Box>
          )}
        </Paper>
      </Stack>
    </Grid>
  );
};
