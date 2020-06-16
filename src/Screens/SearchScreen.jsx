import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import CustomSlider from "../Components/CustomSlider";
import CustomButton from "../Components/CustomButton";
import CustTextFields from "../Components/CustTextFields";
import CustSelect from "../Components/CustSelect";
import Box from "@material-ui/core/Box";

const SearchScreen = () => {
  return (
    <Paper square elevation={0}>
      <Grid container spacing={0} direction="row">
        <Grid item xs={3} />
        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={6}
          style={{ height: "100vh" }}
        >
          <Grid item xs={12} style={{ height: "20vh" }} />
          <Grid item xs={12}>
            <Typography display="inline" variant="h3">
              Search
            </Typography>
            <Typography display="inline" variant="h3">
              <Box display="inline" fontWeight="fontWeightBold" m={1}>
                Doctors
              </Box>
            </Typography>
          </Grid>
          <Grid item container xs={12} spacing={1}>
            <Grid item xs={6}>
              <CustTextFields />
            </Grid>
            <Grid item xs={6}>
              <CustSelect />
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <CustomSlider label1="Price" label2="500-1000" points={[20, 50]} />
          </Grid>
          <Grid item xs={4}>
            <CustomSlider label1="Distance" label2="5km" points={30} />
          </Grid>
          <Grid item xs={4}>
            <CustomSlider label1="Ranking" label2="Medium" points={30} />
          </Grid>
          <Grid item xs={12}>
            <CustomButton text="Search" />
          </Grid>
          <Grid item xs={12} style={{ height: "20vh" }} />
        </Grid>

        <Grid item xs={3} />
      </Grid>
    </Paper>
  );
};

export default SearchScreen;
