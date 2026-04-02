import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Aquire Hardware',
    description:
      'Get new hardware or use your old computer as a refunked server.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Install Server OS',
    description:
      'Install Ubuntu server OS for efficiency.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Run Services',
    description:
      'Pick from a large list of free apps to host.',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Configure Network',
    description:
      'Purchase domain for convinience or securely connect with the Tailscale VPN.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'All Set!',
    description:
      'Use your new services on any device.',
  },
];

export default function Services() {
  return (
    <Box
      id="installation"
      sx={{
        scrollMarginTop: 100,
        pt: { xs: 4, sm: 12 },
        pb: { xs: 4, sm: 12 },
        color: 'text.primary',
        bgcolor: 'background.default',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '70%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h2" gutterBottom>
            What we do for you
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: 'clamp(1rem, 1vw, 1.25rem)' }}>
            We will get the hardware, install a server OS, setup and run server apps of your choice, configure your network, and then you're all set!
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: 'inherit',
                  p: 3,
                  height: '100%',
                  border: 1,
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                    {item.title}
                  </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
