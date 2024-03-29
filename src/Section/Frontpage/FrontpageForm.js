import React from 'react'
import { Box, Button, Typography} from '@mui/material';
import { Link } from 'react-router-dom';

function FrontPageForm() {
  return (
    <Box sx={{ display: 'flex',justifyContent:'space-around',gap: '3', backgroundColor: '#ABCDCD'}}>
    <Box sx={{ width: '500%', maxWidth: 500,display:'flex',flexDirection:'column',marginLeft:-10 }}>
    <Typography variant="h1" sx={{marginLeft:7,marginTop:5}}>
      Dive into a world of influence-
    </Typography>
    <Typography variant='h4' sx={{marginLeft:7,marginTop:3}}>
      our social media mastery ensures your brand not only stands out but stays ahead
    </Typography>
    <Button variant="contained" sx={{fontSize:30,backgroundColor:'white',color:'black',marginTop:3,width:280,borderRadius:3,height:90,textAlign:'center',marginLeft:15,    '&:hover': { backgroundColor: 'white',},}}>
      <Link to="/Login"style={{ textDecoration: 'none', color: 'inherit' }}>
      GET STARTED
      </Link> 
    </Button>
    </Box>
        <Box component="img"sx={{ width: '50%',objectFit:'contain',marginTop:20 }}
        src="/Assets/peoplesocial.png"alt="Live from space album cove">
        </Box>
    </Box>

  )

}

export default FrontPageForm