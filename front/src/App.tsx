import { Box, Container, Typography } from '@mui/material';

const App = () => {

  return (
    <Box>
      <Container maxWidth="md" disableGutters>
        <Box sx={{textAlign: 'center', marginBottom: 3}}>
          <Typography variant="h3" sx={{m: 3}}>
            React-Guestbook
          </Typography>
          <Typography>
            MUI & Axios & Express
          </Typography>
        </Box>


      </Container>
    </Box>
  );
};

export default App;