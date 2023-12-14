import { Grid, Paper } from "@mui/material"
import Chart from "../layouts/app/Chart";
import Deposits from "../layouts/app/Deposits";

export const MainPage = () => {
  return (
    <>
    {/* Chart */}
    <Grid item xs={12} md={8} lg={9}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 240,
        }}
      >
        <Chart />
      </Paper>
    </Grid>
    {/* Recent Deposits */}
    <Grid item xs={12} md={4} lg={3}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 240,
        }}
      >
        <Deposits />
      </Paper>
    </Grid>
  </>
    
  )
}
