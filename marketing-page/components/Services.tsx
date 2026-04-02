import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

type StyledBoxProps = {
  lightImage: string;
  darkImage: string;
};

const StyledBox = styled('div', {
  shouldForwardProp: (prop) => prop !== 'lightImage' && prop !== 'darkImage',
})<StyledBoxProps>(({ theme, lightImage, darkImage }) => ({
  alignSelf: 'center',
  width: '100%',
  aspectRatio: '2048 / 1080',
  position: 'relative',
  boxSizing: 'border-box',
  borderRadius: (theme.vars || theme).shape.borderRadius,
  outline: '6px solid',
  outlineColor: 'hsla(220, 25%, 80%, 0.2)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.grey[200],
  boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
  backgroundColor: (theme.vars || theme).palette.background.paper,
  overflow: 'hidden',

  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(4),
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 12,
    borderRadius: `calc(${(theme.vars || theme).shape.borderRadius}px - 12px)`,
    backgroundImage: `url("${lightImage}")`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },

  ...theme.applyStyles('dark', {
    boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
    outlineColor: 'hsla(220, 20%, 42%, 0.1)',
    borderColor: (theme.vars || theme).palette.grey[700],

    '&::before': {
      backgroundImage: `url("${darkImage}")`,
    },
  }),
}));

const services = [
  {
    number: '1.',
    title: 'Immich',
    description: 'A Google Photos replacement.',
    lightImage: '/immich_light.png',
    darkImage: '/immich_dark.png',
  },
  {
    number: '2.',
    title: 'Nextcloud',
    description: 'A Google Drive replacement.',
    lightImage: '/nextcloud_light.png',
    darkImage: '/nextcloud_dark.png',
  },
  {
    number: '3.',
    title: 'Jellyfin',
    description: 'A Netflix replacement.',
    lightImage: '/jellyfin.png',
    darkImage: '/jellyfin.png',
  },
  {
    number: '4.',
    title: 'Navidrome',
    description: 'A Spotify replacement.',
    lightImage: '/navidrome_light.png',
    darkImage: '/navidrome_dark.png',
  },
];

export default function Services() {
  return (
    <Box
      id="services"
      sx={{
        scrollMarginTop: 100,
        color: 'text.primary',
        bgcolor: 'background.default',
        pt: { xs: 4, sm: 12 },
        pb: { xs: 4, sm: 12 },
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', sm: '100%', md: '100%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h2" gutterBottom>
            Services
          </Typography>

          {services.map((service) => (
            <Box
              key={service.title}
              sx={{
                mt: { xs: 10, sm: 10 },
              }}
            >
              <Typography
                component="h3"
                variant="h4"
                sx={{
                  color: 'text.primary',
                  mb: 2,
                }}
              >
                {service.number} {service.title}
              </Typography>

              <Typography
                sx={{
                  mx: 'auto',
                  mb: 3,
                  color: 'text.secondary',
                  fontSize: 'clamp(1rem, 1vw, 1.25rem)',
                  textAlign: { sm: 'left', md: 'center' },
                }}
              >
                {service.description}
              </Typography>

              <StyledBox
                darkImage={service.darkImage}
                lightImage={service.lightImage}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}