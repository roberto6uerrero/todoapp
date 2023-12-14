import { Box, Button, Grid, Paper, Stack, TextField } from "@mui/material"
import { useLocation } from "react-router-dom"
import { useTaskContext } from "../context/taskContext"
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { taskSchema } from "../schemas/taskSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { makeStyles } from "@material-ui/core/styles";

export const UpdateTaskPage = () => {
  const path = useLocation().pathname.split("/")
  const idTask = path[path.length - 1]
  const { task, getTask, snackbar, updateTask} = useTaskContext()
  const { openSnackbar } = snackbar

  
  useEffect(() => {
    getTask(idTask)
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    resolver: zodResolver(taskSchema),
  });
  
  useEffect(() => {
    if(task){
      const { title, description } = task;
      setValue("title", title);
      setValue("description", description);
    }
  }, [task, setValue])

  const onSubmit = (formData) => {
    console.log("on submit update")
    formData.state = "pending"
    const data = JSON.stringify(formData);
    updateTask(idTask, data).then(res => {
      if (res){
        console.log("res", res)
        openSnackbar({
          state: true,
          type: "success",
          message: "Tarea creada exitosamente",
        })
      }
    })
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
            {
              !task ? "Cargando ...": (
                <Box component="form" autoComplete="off" mb={5} onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12}>
                    <TextField
                      label="title"
                      variant="outlined"
                      id="title"
                      type="text"
                      {...register("title")}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Description"
                      variant="outlined"
                      id="description"
                      {...register("description")}
                      type="text"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <Button type="submit">Actualizar</Button>
                  </Grid>
                </Grid>
              </Box>
              )
            }
          </Paper>
      </Stack>
    </Grid>
  );
};
