import Home from './Home.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import ServiceDetails from './ServiceDetails.jsx';
import Appointment from './Appointment.jsx';
import Contact from './Contact.jsx';
import Blog from './Blog.jsx';
import BlogDetails from './BlogDetails.jsx';
import PrivacyPolicy from './PrivacyPolicy.jsx';
import NotFound from './NotFound.jsx';

export const pages = {
  'index.html': {
    Component: Home,
    title: 'Accueil — SkinTherapie',
    lang: 'fr',
  },
  'about.html': { Component: About, title: 'À Propos de Nous', lang: 'fr' },
  'service.html': {
    Component: Services,
    title: 'Nos Rituels — SkinTherapie',
    lang: 'fr',
  },
  'service-static.html': {
    Component: ServiceDetails,
    title: 'Nos Rituels — SkinTherapie',
    lang: 'fr',
  },
  'appointment.html': {
    Component: Appointment,
    title: 'Prendre rendez-vous — SkinTherapie',
    lang: 'fr',
  },
  'contact.html': {
    Component: Contact,
    title: 'Contact — SkinTherapie',
    lang: 'fr',
  },
  'blog.html': {
    Component: Blog,
    title: 'Le Journal — SkinTherapie',
    lang: 'fr',
  },
  'blog-details.html': {
    Component: BlogDetails,
    title: 'Journal — SkinTherapie',
    lang: 'fr',
  },
  'privacy-policy.html': {
    Component: PrivacyPolicy,
    title: 'Politique de confidentialité — SkinTherapie',
    lang: 'fr',
  },
  '404-error.html': { Component: NotFound, title: 'Not Found', lang: 'en' },
};
