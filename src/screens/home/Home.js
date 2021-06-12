import React, {useState} from 'react'
import Header from "../../common/header/Header"
import "./Home.css"
import moment from 'moment';
import {Link} from "react-router-dom";
import tileData from "../../common/moviesData"
import genres from "../../common/genres"
import artists from "../../common/artists"
 
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
 
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
 
import { useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
 
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
 
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
   formControl: {
       margin: theme.spacing(1),
       minWidth: 120,
       maxWidth: 300,
     },
     chips: {
       display: 'flex',
       flexWrap: 'wrap',
     },
     chip: {
       margin: 2,
     },
     noLabel: {
       marginTop: theme.spacing(3),
     },
 }));
 
 const ITEM_HEIGHT = 48;
 const ITEM_PADDING_TOP = 8;
 const MenuProps = {
   PaperProps: {
     style: {
       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
       width: 250,
     },
   },
 };
  function getStyles(name, personName, theme) {
   return {
     fontWeight:
       personName.indexOf(name) === -1
         ? theme.typography.fontWeightRegular
         : theme.typography.fontWeightMedium,
   };
 }
 
 
const Home = () => {
   const classes = useStyles();
 
   const theme = useTheme();
   const [personName, setPersonName] = React.useState([]);
 
   const handleChange = (event) => {
     setPersonName(event.target.value);
   };
 
   const handleChangeMultiple = (event) => {
     const { options } = event.target;
     const value = [];
     for (let i = 0, l = options.length; i < l; i += 1) {
       if (options[i].selected) {
         value.push(options[i].value);
       }
     }
     setPersonName(value);
   };
 
   const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
   const handleDateChange = (date) => {
     setSelectedDate(date);
   };
 
   const [movieName, setMovieName] = useState("")
 
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
                 <GridList  cols={4} >
                 {tileData.map((data) => (
                         <GridListTile key={data.id} style={{height:"350px", margin:"16px", width:"220px"}}> 
                         
                         <Link to={{
                           pathname: "/details",
                           data:{data},
                         }}>
                         <img
                             style={{height:"350px", width:"220px"}}
                             src={data.poster_url} alt={data.title}
                         />
                         </Link>

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
                   
               <div className="right">
               <Card >
                   <CardContent>
                       <Typography variant="h5" component="h2" style={{color:"#30409E"}}>
                       FIND MOVIES BY:
                       </Typography>
                   </CardContent>
                      
                       <form noValidate autoComplete="off">
                       <TextField
                           style={{width:"90%", margin:"10px"}}
                           id="standard-basic"
                           label="Movie Name"
                           value={movieName}
                           onChange={(event) => setMovieName(event.target.value) }
                       />
                       </form>
 
                       <FormControl style={{width:"90%", margin:"10px"}}>
                         <InputLabel id="demo-mutiple-checkbox-label">Genres</InputLabel>
                         <Select
                           labelId="demo-mutiple-checkbox-label"
                           id="demo-mutiple-checkbox"
                           multiple
                           value={personName}
                           onChange={handleChange}
                           input={<Input />}
                           renderValue={(selected) => selected.join(', ')}
                           MenuProps={MenuProps}
                         >
                           {genres.map((name) => (
                             <MenuItem key={name.id} value={name.name}>
                               <Checkbox checked={personName.indexOf(name.name) > -1} />
                               <ListItemText primary={name.name} />
                             </MenuItem>
                           ))}
                         </Select>
                       </FormControl>
 
                       <FormControl style={{width:"90%", margin:"10px"}}>
                         <InputLabel id="demo-mutiple-checkbox-label">Artists</InputLabel>
                         <Select
                           labelId="demo-mutiple-checkbox-label"
                           id="demo-mutiple-checkbox"
                           multiple
                           value={personName}
                           onChange={handleChange}
                           input={<Input />}
                           renderValue={(selected) => selected.join(', ')}
                           MenuProps={MenuProps}
                         >
                           {artists.map((name) => (
                             <MenuItem key={name.id} value={name.first_name}>
                               <Checkbox checked={personName.indexOf(name.first_name) > -1} />
                               <ListItemText primary={name.first_name} />
                             </MenuItem>
                           ))}
                         </Select>
                       </FormControl>
 
                       <MuiPickersUtilsProvider utils={DateFnsUtils}>
                         <KeyboardDatePicker
                         style={{width:"90%", margin:"10px"}}
                           disableToolbar
                           variant="inline"
                           format="MM/dd/yyyy"
                           margin="normal"
                           id="date-picker-inline"
                           label="Release Date Start"
                           value={selectedDate}
                           onChange={handleDateChange}
                           KeyboardButtonProps={{
                             'aria-label': 'change date',
                           }}
                         />
                       </MuiPickersUtilsProvider>
 
                       <MuiPickersUtilsProvider utils={DateFnsUtils}>
                         <KeyboardDatePicker
                         style={{width:"90%", margin:"10px"}}
                           disableToolbar
                           variant="inline"
                           format="MM/dd/yyyy"
                           margin="normal"
                           id="date-picker-inline"
                           label="Release Date End"
                           value={selectedDate}
                           onChange={handleDateChange}
                           KeyboardButtonProps={{
                             'aria-label': 'change date',
                           }}
                         />
                       </MuiPickersUtilsProvider>
 
                   <CardActions>
                   <Button variant="contained" color="primary" style={{width:"100%"}}>
                     APPLY
                   </Button>
                   </CardActions>
               </Card>
               </div>
           </div>
 
       </>
   )
}
 
export default Home
