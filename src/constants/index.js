import HomePage from '../containers/HomePage';
import Servicios from '../containers/Servicios';
import ProduccionesPropias from '../containers/ProduccionesPropias';
import QuienesSomos from '../containers/QuienesSomos';
import Contacto from '../containers/Contacto';

export const API_ENDPOINT = 'http://localhost:3000';

export const STATUSES = [
  {
    value: 0,
    label: 'READY',
  },
  {
    value: 1,
    label: 'IN PROGRESS',
  },
  {
    value: 2,
    label: 'COMPLETED',
  },
];

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202,
};

export const ADMIN_ROUTES = [
  {
    name: 'Inicio',
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    name: 'Servicios',
    path: '/servicios',
    component: Servicios,
  },
  {
    name: 'Producciones propias',
    path: '/producciones-propias',
    exact: true,
    component: ProduccionesPropias,
  },
  {
    name: 'Quienes somos',
    path: '/quienes-somos',
    component: QuienesSomos,
  },
  {
    name: 'Contacto',
    path: '/contacto',
    exact: true,
    component: Contacto,
  }
];
