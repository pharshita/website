import * as React from 'react';
import TextField from '@mui/material/TextField';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Box from '@mui/material/Box';

export default function Date() {
  const [value, setValue] = React.useState([null, null]);

  return (
      <div className='dateformate'>

    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText="Start-Date"
        endText="End-Date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        
        renderInput={(startProps, endProps) => (
            <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2}}> <p style={{fontSize:"20px"}}>to</p> </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
        sx={{backgroundColor:"#828282"}}
      />
    </LocalizationProvider>
      </div>
  );
}

// import React from 'react'
// // import './css/DateRange.css'


// import { DateRangePicker } from 'rsuite';
// import 'rsuite/dist/rsuite.min.css';


// const Date = () => {

//   return(
//     <>
//       <DateRangePicker  placeholder='YYYY-MM-DD ~ YYYY-MM-DD'/>
//     </>
//   )

// }

// export default Date;