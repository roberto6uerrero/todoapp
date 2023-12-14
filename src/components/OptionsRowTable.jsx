import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { useTaskContext } from "../context/taskContext";
const ITEM_HEIGHT = 48;

const OptionsRowTable = ({ id }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const {deleteTask, snackbar} = useTaskContext()
  const { openSnackbar } = snackbar
  const navigate = useNavigate()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onDelete = () => {
    deleteTask(id).then(res => {
      if(res){
        openSnackbar({
          state: true,
          type: "success",
          message: "Tarea eliminada exitosamente",
        })
      }
    })
    setAnchorEl(null);
  };

  const onEdit = () => {
    navigate(`/task/update/${id}`)
    // setAnchorEl(null);
  };


  return (
    <>
      <div>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          }}
        >
          <MenuItem key="edit" onClick={onEdit}>
            Edit
          </MenuItem>
          <MenuItem key="delete" onClick={onDelete}>
            Delete
          </MenuItem>
        </Menu>
      </div>
      {/* <AlertDialogComponent /> */}
    </>
  );
};

export default OptionsRowTable;
