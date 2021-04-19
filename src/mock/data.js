import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Vishwanath Ezhil',
  subtitle: "I'm a Front End Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'prop.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.google.com/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.png',
    img2: 'react1.png',
    title: 'Ticket Booking Application',
    info: 'Built a React application to book movie tickets for movies currently playing in theatres. ',
    info2: '',
    url: 'https://ticket-booking-app1.netlify.app/',
    repo: 'https://github.com/vishwa742/React-ticketing-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Airplane Boarding Visualizer',
    info: 'A Visualization Project built on React.js to compare the most effective and the least effective airplane boarding techniques.',
    info2: '',
    url: 'https://airplane-vis.netlify.app/',
    repo: 'https://github.com/vishwa742/Airplane-Boarding-Visualizer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Restaurant Finder',
    info: 'Designed a website using Flask to find restaurants across the United States based on address or a city name.',
    info2: '',
    url: 'https://restaurant-finder-vish.herokuapp.com/',
    repo: 'https://github.com/vishwa742/RestaurantFinder', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ezhilvishwanath@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/e-vishwanath/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/vishwa742',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
