import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const tiers = [
  {
    title: 'One-time purchase',
    price: '150',
    description: [
      'No subscriptions',
      'No limit on the amount of users',
      'Own your own media',
      'Protect your data',
      'Use any services you want',
    ],
  },
];

export default function Pricing() {
  return (
    <Container
      id="pricing"
      sx={{
        scrollMarginTop: 100,
        pt: { xs: 4, sm: 12 },
        pb: { xs: 4, sm: 12 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 900,
          textAlign: 'center',
        }}
      >
        <Typography
          component="h2"
          variant="h2"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Pricing
        </Typography>
      </Box>

      <Grid
        container
        justifyContent="center"
        sx={{
          width: '100%',
          maxWidth: 900,
        }}
      >
        {tiers.map((tier) => (
          <Grid key={tier.title} size={{ xs: 12, md: 8 }}>
            <Card
              sx={(theme) => ({
                p: 2,
                border: 'none',
                borderRadius: 3,
                background:
                  'radial-gradient(circle at 50% 0%, hsl(220, 20%, 35%), hsl(220, 30%, 6%))',
                boxShadow: '0 8px 12px hsla(220, 20%, 42%, 0.2)',
                ...theme.applyStyles('dark', {
                  background:
                    'radial-gradient(circle at 50% 0%, hsl(220, 20%, 20%), hsl(220, 30%, 16%))',
                  boxShadow: '0 8px 12px hsla(0, 0%, 0%, 0.8)',
                }),
              })}
            >
              <CardContent>
                <Box
                  sx={{
                    mb: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Typography component="h3" variant="h5" color="grey.100">
                    {tier.title}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'baseline',
                    color: 'grey.50',
                    gap: 1,
                  }}
                >
                  <Typography component="span" variant="h2">
                    ${tier.price}
                  </Typography>
                  <Typography component="span" variant="h6">
                    once
                  </Typography>
                  <Typography component="span" variant="h4">
                    + hardware
                  </Typography>
                </Box>

                <Divider sx={{ my: 3, opacity: 0.8, borderColor: 'divider' }} />

                {tier.description.map((line) => (
                  <Box
                    key={line}
                    sx={{
                      py: 1,
                      display: 'flex',
                      gap: 1.5,
                      alignItems: 'center',
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        width: 20,
                        color: 'primary.light',
                      }}
                    />
                    <Typography
                      variant="subtitle2"
                      component="span"
                      sx={{ color: 'grey.50' }}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}