import React from "react";
import CountUp from "react-countup";
import {Card , CardContent , Typography , Grid} from "@material-ui/core";
import cx from "classnames";

import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed , recovered , deaths , lastUpdate} }) => {
    if(!confirmed){
        return "loading ...";
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs = {12} md = {3} className = { cx(styles.card , styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterButtom>infected ..</Typography>
                        <Typography variant="h5">
                            <CountUp start = {0} end = {confirmed.value} duration = {3} separator = "," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">number of active cases of covid-19</Typography>
                    </CardContent>

                </Grid>
                <Grid item component={Card} xs = {12} md = {3} className = { cx(styles.card , styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterButtom>Recovered ..</Typography>
                        <Typography variant="h5">
                            <CountUp start = {0} end = {recovered.value} duration = {3} separator = "," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">number of recoveries from covid-19</Typography>
                    </CardContent>

                </Grid>
                <Grid item component={Card} xs = {12} md = {3} className = { cx(styles.card , styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterButtom>deaths ..</Typography>
                        <Typography variant="h5">
                            <CountUp start = {0} end = {deaths.value} duration = {3} separator = "," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">number of deaths caused by covid-19</Typography>
                    </CardContent>

                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;