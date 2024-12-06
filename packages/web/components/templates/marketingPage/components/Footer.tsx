import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';



export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pt: { xs: 4, sm: 8 },
          width: '100%',
        }}
      >
        <div>
          <Link color="text.secondary" variant="body2" href="https://www.iweaver.ai/privacy" target="_blank">
            Privacy Policy
          </Link>
          <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" variant="body2" href="https://www.iweaver.ai/terms-of-use" target="_blank">
            Terms of Service
          </Link>
        </div>
      </Box>
    </Container>
  );
}
