import fontFamilies from './fontFamily'
import React, { useEffect,useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import WebFont from 'webfontloader';
import { Select } from '@material-ui/core';
import { setValueMe } from '../../redux/actions/funnel.action'
import { connect } from 'react-redux';



const mapDispatchToProps = (dispatch) => {
    return {           
        setValueMe: (newValue,type) => { dispatch(setValueMe({ value: newValue, type:type })) },
    }
}

export default connect( null,mapDispatchToProps) ( function Font(props) {

    const {setValueMe}=props
  const [arrFonts, setArrFonts] = useState(fontFamilies);
  const [oneFont, setoneFont] = useState(fontFamilies[0].family);


  useEffect(() => {
    const arr = [];
    fontFamilies.map((i) => { arr.push(i.family) })
    WebFont.load({
      google: {
        families: arr
       
      }
    });
  }, []); 

  const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(8),
      },
    },
    input: {
      borderRadius: 1,
      position: 'relative',
      background: "#F0F0F0 0% 0% no-repeat padding-box",
      opacity: 0.5,
      width:"10vw",
      height:"0.7vh",
      float:'left',
      // paddingLeft:"10px",
      border: '1px solid #ced4da',
      fontSize: 16,
      // padding: '10px 20px 10px 100px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
     
      '&:focus': {
        borderRadius: 8,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);
  
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(0),
      
    },
  }));
  const classes = useStyles();
  
 return (
<div style={{width:"2px"}}>
 
       <FormControl  className={classes.margin} >
      <Select onChange=
      {(event) => {setValueMe(event.target.value,"fontFamily") ;setoneFont(event.target.value)}}
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={oneFont}
            style={{fontFamily:oneFont,margin:"0px !important"}}
         
          input={<BootstrapInput />}  >
       
 {arrFonts.map((font) =>

<MenuItem id="optionfont" 
style={{fontFamily:font.family}} value={font.family} key={font.family}>
  {font.family}

</MenuItem>

)}
         
        </Select>
      </FormControl>
     
    </div>




  )
}

)