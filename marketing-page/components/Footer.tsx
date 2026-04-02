import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Container
      sx={{
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
            Contact Us
          </Typography>
          <Link
            variant="body2"
            href="mailto:servomehomeservers@gmail.com?subject=Home%20Server%20Inquiry&body=Hi%2C%20I%20wanted%20to%20ask%20about..."
            sx={{
              color: 'text.secondary',
            }}
          >
            Email
          </Link>
      </Box>
    </Container>
  );
}
