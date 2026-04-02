'use client';

import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Footer from './components/Footer';
import Title from './components/Title'
import Installation from './components/Installation'


export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Title />
      <Divider />
      <Installation />
      <Divider />
      <Services />
      <Divider />
      <div>
        <Features />
        <Divider />
        <Pricing />
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  );
}
