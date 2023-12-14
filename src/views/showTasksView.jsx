import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import OptionsRowTable from "./OptionsRowTable";
import { Checkbox } from "@mui/material";
import { useTaskContext } from "../context/taskContext";

const TableComponent = ({ data }) => {
  const { updateTask, getTasks } = useTaskContext();

  const handleChange = (event, id, state) => {
    if (state === "completed") {
      const json = JSON.stringify({ state: "pending" });
      updateTask(id, json);
      getTasks();
    } else {
      const json = JSON.stringify({ state: "completed" });
      updateTask(id, json);
      getTasks();
    }
  };
  return (
    <TableContainer
      component={Paper}
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            {/* <TableCell>state</TableCell> */}
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={row.state === "completed" ? { background: '#bee8dc' } : {}}
            >
              <TableCell>
                <Checkbox
                  color="primary"
                  checked={row.state === "completed"}
                  onChange={(e) => {
                    handleChange(e, row.id, row.state);
                  }}
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.description}</TableCell>
              {/* <TableCell>{row.state}</TableCell> */}
              <TableCell>
                <OptionsRowTable id={row.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

TableComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      state: PropTypes.string,
      id: PropTypes.number,
    })
  ).isRequired,
};

export default TableComponent;