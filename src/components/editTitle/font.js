
import fontFamilies from './fontFamily'
import React, { useEffect,useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import WebFont from 'webfontloader';
import { Select } from '@material-ui/core';
import { connect } from 'react-redux';
import './font.css'
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {actions} from '../../redux/actions/funnel-try.action'

const mapDispatchToProps = (dispatch) => {
    return {           
        setValueMe: (newValue,type) => { dispatch(actions.setValueMe({ value: newValue, type:type })) },
    }
}

export default connect( null,mapDispatchToProps) ( function Font(props) {

  const {setValueMe}=props
  const [arrFonts, setArrFonts] = useState(fontFamilies);
  const [oneFont, setoneFont] = useState(fontFamilies[0].family);
  const [ismyt,setismyt]=useState(true)

  // useEffect(() => {
  //   const arr = [];
  //   fontFamilies.map((i) => { arr.push(i.family) })
    
  //   WebFont.load({
  //     google: {
  //       src:"https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js",
  //       families: arr
  //     }
  //   });


  // }, []); 
//const WebFont=lazy(() => import('webfontloader'));
const findMyFtSize=()=>{
 if(ismyt)
 {


  const arr = [];
    fontFamilies.map((i) => { arr.push(i.family) })
   // React.lazy(()=>{

      WebFont.load({
      google: {
        // src:"https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js",
        families: arr
      }
      })
   // })
   setismyt(false)
 }
    
    
}
// $("#c").one( "click", function() {
//   const arr = [];
//   fontFamilies.map((i) => { arr.push(i.family) })
//  // React.lazy(()=>{

//     WebFont.load({
//     google: {
//       // src:"https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js",
//       families: arr
//     }
//     })
// })

 
 return (
//<div style={{width:"100%",height:'100%',alignItems:'center'}}>
 //<Suspense fallback={<div>Loading</div>}>
       <FormControl  id='c'
        onClick={()=>{findMyFtSize()}}
      //  className={classes.margin} 
       style={{width:'100%',height:'90%',fontSize:'1vw'}} >
      

<Autocomplete
      id="moi"
      //onClick={()=>{findMyFtSize()}}
      options={arrFonts}
      onChange={(event) =>setValueMe(event.target.innerText,"fontFamily") }
      getOptionLabel={(option) => option.family}
      //style={{ width: '100%',fontSize:'1vw' ,color:'red'}}
      defaultValue={ arrFonts[0] }
     // classes={{input:{backgroundColor:'red'}}}
      
    //  input={{style:{color:'green'}}}
      renderOption={(a, option) => {
        const {family } = a;
        return (
          
          <label {...a} style={{ fontFamily: family, fontSize:'1vw' }}>
            {family}
          </label>
        );
      }}
    
    
      renderInput={(params) => {
        
        return (
          <TextField 
        //  inputStyle={{ backgroundColor: 'red' }} 
          {...params} variant="outlined" 
         // inputProps={{style:{ }}}

          />
        );
      }}
    />


      </FormControl>
    //  </Suspense>
     
   // </div>




  )
}

)