import React from 'react'
import Header from "../../common/header/Header"
import "./Home.css"
import moment from 'moment';
import tileData from "../../common/moviesData"

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles((theme) => ({
root: {
display: 'flex',
flexWrap: 'wrap',
justifyContent: 'space-around',
overflow: 'hidden',
backgroundColor: theme.palette.background.paper,
},
gridList: {
flexWrap: 'nowrap',
transform: 'translateZ(0)',
},
title: {
color: theme.palette.primary.light,
},
titleBar: {
background:
'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
},
}));

const Home = () => {
const classes = useStyles();
return (
<>
<Header />
<span className="homeHeader">Upcoming Movies</span>

<div className={classes.root}>
<GridList className={classes.gridList} cols={6}>
{tileData.map((tile) => (
<GridListTile key={tile.img}>
<img src={tile.poster_url} alt={tile.title} />
<GridListTileBar
title={tile.title}
classes={{
root: classes.titleBar,
}}
/>
</GridListTile>
))}
</GridList>
</div>

<div className="flex-container">
<div className="left">
<GridList cols={4}>
{tileData.map((data) => (
<GridListTile key={data.id} style={{height:"350px", margin:"16px", width:"220px"}}>
<img
style={{height:"350px", width:"220px"}}
src={data.poster_url} alt={data.title}
/>
<GridListTileBar
title={data.title}
subtitle={<span>Release Date:
{moment(data.release_date).format("DD.MM.YYYY")}
</span>}
/>
</GridListTile>
))}
</GridList>
</div>
<div className="right"></div>
</div>

</>
)
}

export default Home

