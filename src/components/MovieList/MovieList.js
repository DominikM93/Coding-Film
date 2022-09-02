import React from "react";
import PropTypes from "prop-types";
import {Grid, Typography} from "@mui/material";
import {Grade} from "@mui/icons-material";
import {StyledLink} from "./styles";

const MovieList = ({movie}) => {
    return (
        <>
            <Grid
                container
                direction="row"
                sx={{
                    alignItems: "center",
                    borderBottom: "1px solid black",
                    padding: "5px 20px",
                }}>
                <Grid item md={2}>
                    <Typography variant="h6">{`${movie.rank} ${
                        movie.rankUpDown === undefined
                            ? ""
                            : `(${movie.rankUpDown})`
                    }`}</Typography>
                </Grid>
                <Grid item md={2}>
                    <StyledLink to={`/movie/${movie.id}`}>
                        <img
                            style={{height: "150px"}}
                            src={movie.image}
                            alt={movie.title}
                        />
                    </StyledLink>
                </Grid>
                <Grid
                    item
                    container
                    direction="column"
                    md={6}
                    sx={{width: "fit-content"}}>
                    <StyledLink to={`/movie/${movie.id}`}>
                        <Typography variant="h6">{`${movie.title} (${movie.year})`}</Typography>
                    </StyledLink>
                </Grid>
                <Grid item md={2}>
                    <Typography variant="h6">
                        <Grade sx={{color: "#ffc600"}} />
                        {movie.imDbRating}
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

MovieList.propTypes = {
    movie: PropTypes.object,
};

export default MovieList;
