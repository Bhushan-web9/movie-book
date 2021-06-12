import React from 'react'
import Header from '../../common/header/Header'
import moment from 'moment';
import { useLocation } from "react-router-dom";
import {Link} from "react-router-dom";
import "./Details.css"
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import YouTube from 'react-youtube';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

// import {Rating} from '@material-ui/lab';

const Details = () => {
    const location = useLocation();

    const PosterImage = location?.data?.data?.poster_url
    const Title = location?.data?.data?.title
    const Genres = location?.data?.data?.genres
    const Duration = location?.data?.data?.duration
    const ReleaseDate = location?.data?.data?.release_date
    const Rating = location?.data?.data?.critics_rating
    const StoryLine = location?.data?.data?.storyline
    const WikiUrl = location?.data?.data?.wiki_url
    const TrailerUrl = location?.data?.data?.trailer_url
    const Artists = location?.data?.data?.artists

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
        },
      };

      function _onReady(event) {
        event.target.pauseVideo();
      }
    return (
        <div>
            <Header/>
            <Link to="/" style={{textDecoration:"none", color:"black"}}>
                    <div className="datailsLeftBackButton">
                    <ArrowBackIosIcon style={{fontSize:"12px"}}/>
                        <Typography>
                        Back to Home
                        </Typography>
                    </div>
                    </Link>
            <div className="datailsContainer">
                <div className="datailsLeft">
                    <img 
                        src={PosterImage}
                        alt="vdfv" 
                        className="datailsLeftImage"
                    />
                </div>
                <div className="datailsCenter">
                    <Typography variant="h2" component="h2">{Title}</Typography>
                    
                    <div className="datailsCenterItem">
                    <Typography style={{fontWeight:"bold"}}>Genres:</Typography>
                    <Typography>{Genres}</Typography>
                    </div>

                    <div className="datailsCenterItem">
                    <Typography style={{fontWeight:"bold"}}>Duration:</Typography>
                    <Typography>{Duration}</Typography>
                    </div>

                    <div className="datailsCenterItem">
                    <Typography style={{fontWeight:"bold"}}>Release Date:</Typography>
                    <Typography>{moment(ReleaseDate).format("DD.MM.YYYY")}</Typography>
                    </div>

                    <div className="datailsCenterItem">
                    <Typography style={{fontWeight:"bold"}}>Rating:</Typography>
                    <Typography>{Rating}</Typography>
                    </div>

                    <div className="datailsCenterItem" style={{marginTop:"16px"}}>
                    <Typography style={{fontWeight:"bold"}}>Plot:</Typography>
                    <Typography><Link to={WikiUrl}>(Wiki Link)</Link>{StoryLine}</Typography>
                    </div>

                    <div className="datailsCenterVideo" style={{marginTop:"16px"}}>
                    <Typography style={{fontWeight:"bold"}}>Trailer:</Typography>
                    <Typography >
                    <YouTube videoId={TrailerUrl} opts={opts}/>
                    </Typography>
                    
                    </div>
                </div>


                <div className="datailsRight">
            
                   <div className="datailsCenterItem" style={{marginTop:"16px", marginBottom:"16px"}}>
                    <Typography style={{fontWeight:"bold"}}>Artists:</Typography>
                    </div>

                    <GridList cellHeight={200}  cols={2}>
                    {Artists.map((tile) => (
                        <GridListTile key={tile.profile_url} cols={1}>
                        <img src={tile.profile_url} alt={tile.id} />
                        <GridListTileBar
                            title={tile.first_name + tile.last_name}
                        />
                        </GridListTile>
                    ))}
                    </GridList>
                             
                </div>
            </div>
        </div>
    )
}

export default Details
