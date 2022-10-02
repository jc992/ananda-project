import { Air, LocalFireDepartment, Water } from '@mui/icons-material';

const sx = { cursor: 'pointer', fontSize: 40, marginBottom: '1rem' };

const mainHeroItems = [
  {
    delay: '0',
  },
  {
    delay: '150',
  },
  {
    delay: '300',
  },
];

const showcaseItems = [
  {
    delay: '0',
    title: 'Spirituality',
    description: 'Lorem ipsum dolor sit amet porro his no his deleniti',
    item: <Air color="primary" sx={sx} />,
  },
  {
    delay: '150',
    title: 'Enlightenment',
    description: 'Ne error antiopam usu. Sed vocen concludaturque ea',
    item: <LocalFireDepartment color="primary" sx={sx} />,
  },
  {
    delay: '300',
    title: 'Vibrations',
    description: 'Et usu ocurreret elaboraret doctus prodesse assueverit.',
    item: <Water color="primary" sx={sx} />,
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
    image: 'https://picsum.photos/id/573/1024/720',
    imageAos: 'fade-left',
    isImageFirst: false,
    marginLeft: 15,
  },
  {
    duration: '1000',
    textAos: 'fade-left',
    title: 'Take a look inside',
    description:
      'Te iisque labitur eos, nec sale argumentum scribentur no, augue disputando in vim. Erat fugit sit at,ius lorem deserunt deterruisset no.',
    button: 'Learn More',
    image: 'https://picsum.photos/id/575/1024/720',
    imageAos: 'fade-right',
    isImageFirst: true,
    marginLeft: 10,
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

export { mainHeroItems, showcaseItems, detailsItems, pricingItems, clients };
