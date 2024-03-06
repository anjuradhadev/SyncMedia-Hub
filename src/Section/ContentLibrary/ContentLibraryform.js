import React ,{useState}from 'react'
import {Box, Typography, TextField, Button} from '@mui/material'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

function ContentLibraryform(){
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  return (
    <Box >

    <Box >
      <Typography variant='h4' sx={{marginLeft:17}}>CONTENT LIBRARY</Typography>
    </Box>  

    <Box sx={{backgroundColor:'white', width:600, height:300, marginTop:5, borderRadius:2}}>
      {!selectedFile &&(
    <label htmlFor="fileInput" style={{ cursor: 'pointer', marginTop: 10, color:'gray' }}>
        <FileUploadOutlinedIcon fontSize="small" sx={{marginLeft:35, marginTop:13, color:'gray'}}/>
        <Typography variant="body1" sx={{ marginLeft:28, marginTop:1, color:'gray'}}>
          Choose an image...
        </Typography>
      </label>
      )}
      {selectedFile && (
        <div style={{ height: '100%', overflow: 'hidden', position: 'relative' }}>
         <img
         src={URL.createObjectURL(selectedFile)}
         alt="Selected Image"
         style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '2px', position: 'absolute',
         top: 0,
         left: 0,}}
       />
        {/* <Typography variant="body1" sx={{ marginTop: '10px' }}>
          {selectedFile.name}
        </Typography> */}
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="fileInput"
      />
    </Box> 

    <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center', gap:5}}>
     <Box sx={{marginTop: 3}}>
     <Button variant="outlined" sx={{color:'black', borderColor:'0B6869'}}>Image</Button>
     </Box>
     <Box sx={{marginTop: 3}}>
     <Button variant="outlined" sx={{color:'black', borderColor:'0B6869'}}>Video</Button>
     </Box>
     <Box sx={{marginTop: 3}}>
     <Button variant="outlined" sx={{color:'black', borderColor:'0B6869'}}>Blog</Button>
     </Box>
    </Box>

    <Box sx={{marginTop:3}}>
    <TextField label="Enter the description here" id="outlined-multiline-static" multiline rows={4} sx={{ marginBottom: 3, width: 600, backgroundColor:'white', borderRadius:1}} />
    </Box>

    <Box sx={{display:'flex', flexDirection:'row', gap:3, marginLeft:26}}>
    <Button variant="contained" sx={{color:'white', backgroundColor:'#0B6869','&:hover': {backgroundColor: '#0B6869',}}}>Draft</Button>
    <Button variant="contained" sx={{color:'white', backgroundColor:'#0B6869','&:hover': {backgroundColor: '#0B6869',}}}>Upload</Button>
    </Box>

    </Box>
    
  )
}

export default ContentLibraryform
