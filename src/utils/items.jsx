import AddReactionIcon from '@mui/icons-material/AddReaction';
import AndroidIcon from '@mui/icons-material/Android';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import laptopImage from '../images/Laptop.png';
import tabletImage from '../images/Tablet.png';

const sx = { cursor: 'pointer', fontSize: 40, marginBottom: '1rem' };

const showcaseItems = [
  {
    delay: '0',
    title: 'Anti-spam',
    description: 'Lorem ipsum dolor sit amet porro his no his deleniti',
    item: <AddReactionIcon color="primary" sx={sx} />,
  },
  {
    delay: '150',
    title: 'Phishing Detect',
    description: 'Ne error antiopam usu. Sed vocen concludaturque ea',
    item: <AndroidIcon color="primary" sx={sx} />,
  },
  {
    delay: '300',
    title: 'Smart Scan',
    description: 'Et usu ocurreret elaboraret doctus prodesse assueverit.',
    item: <BrowserUpdatedIcon color="primary" sx={sx} />,
  },
];

const detailsItems = [
  {
    duration: '1000',
    textAos: 'fade-right',
    title: 'Take a look inside',
    description:
      'Te iisque labitur eos, nec sale argumentum scribentur no, augue disputando in vim. Erat fugit sit at,ius lorem deserunt deterruisset no.',
    button: 'Learn More',
    image: laptopImage,
    imageAos: 'fade-left',
    isImageFirst: false,
  },
  {
    duration: '1000',
    textAos: 'fade-left',
    title: 'Take a look inside',
    description:
      'Te iisque labitur eos, nec sale argumentum scribentur no, augue disputando in vim. Erat fugit sit at,ius lorem deserunt deterruisset no.',
    button: 'Learn More',
    image: tabletImage,
    imageAos: 'fade-right',
    isImageFirst: true,
  },
];

const pricingItems = [
  { title: 'STARTUP', price: '0', aos: 'fade-right' },
  { title: 'PREMIUM', price: '10', aos: 'fade-up' },
  { title: 'PROFESSIONAL', price: '30', aos: 'fade-left' },
];

const clientLogoEndpoint = 'https://www.lapa.ninja/lab/atlas/img/client-';

const clients = [
  `${clientLogoEndpoint}1.png`,
  `${clientLogoEndpoint}2.png`,
  `${clientLogoEndpoint}3.png`,
  `${clientLogoEndpoint}4.png`,
  `${clientLogoEndpoint}5.png`,
  `${clientLogoEndpoint}6.png`,
];

export { showcaseItems, detailsItems, pricingItems, clients };
