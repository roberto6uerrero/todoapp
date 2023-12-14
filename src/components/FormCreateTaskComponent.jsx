import { Box, Grid, TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { Fab } from "@material-ui/core";
import { useTaskContext } from "../context/taskContext";
import { useForm } from "react-hook-form";
import { taskSchema } from "../schemas/taskSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const FormCreateTaskComponent = () => {
  const { createTask, snackbar} = useTaskContext();
  const { openSnackbar }= snackbar

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(taskSchema),
  });

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  const onSubmit = (formData) => {
    formData.state = "pending"
    const data = JSON.stringify(formData);
    createTask(data).then(res => {
      if (res){
        openSnackbar({
          state: true,
          type: "success",
          message: "Tarea creada exitosamente",
        })
        reset()
      }
    })
  };

  return (
    <Box component="form" autoComplete="off" mb={5} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={5}>
          <TextField
            label="title"
            variant="outlined"
            id="title"
            type="text"
            {...register("title")}
            fullWidth
          />
        </Grid>
        <Grid item xs={5}>
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
          <Fab
            size="medium"
            color="secondary"
            aria-label="add"
            className={classes.margin}
            type="submit"
          >
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
    </Box>
  );
};
