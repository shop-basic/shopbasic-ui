import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    name: 'Customers',
    url: '/customers',
    iconComponent: { name: 'cil-people' }
  },
  {
    name: 'Stock',
    url: '/base/accordion',
    iconComponent: { name: 'cil-description' }
  },
 
  {
    name: 'Products',
    url: '/products',
    iconComponent: { name: 'cil-storage' }
  }
];
