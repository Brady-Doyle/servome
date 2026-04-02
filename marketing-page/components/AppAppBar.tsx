import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import ColorModeIconDropdown from '../../shared-theme/ColorModeIconDropdown';
import Link from '@mui/material/Link';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{display: 'flex', alignItems: 'center', px: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src="/icon.png" alt="icon" style={{ width: "40px", height: "40px", margin: "2px 10px" }} />
              <Button variant="text" color="info" size="small" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" });}}>
                Home
              </Button>
              <Button variant="text" color="info" size="small" href="#installation">
                Installation
              </Button>
              <Button variant="text" color="info" size="small" href="#services">
                Services
              </Button>
              <Button variant="text" color="info" size="small" href="#features">
                Features
              </Button>
              <Button variant="text" color="info" size="small" href="#pricing">
                Pricing
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              alignItems: 'center',
            }}
          >
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
              <Button variant="text" color="info" size="small">
                <Link
                  href="mailto:servomehomeservers@gmail.com?subject=Home%20Server%20Inquiry&body=Hi%2C%20I%20wanted%20to%20ask%20about..."
                >
                  Contact Us
                </Link>
              </Button>
            <ColorModeIconDropdown size="medium" />
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
