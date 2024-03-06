import React from 'react'
import { Box, Stack } from '@mui/material';
import ContentLibraryform from '../../Section/ContentLibrary/ContentLibraryform'

function ContentLibrary(){
  return (
    <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
        sx={{height:"100vh", backgroundColor: '#ABCDCD', overflow:'hidden'}}
      >
          <ContentLibraryform />
          </Stack>
  )
}

export default ContentLibrary
