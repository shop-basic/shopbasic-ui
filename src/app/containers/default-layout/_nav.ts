import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    name: 'Customers',
    url: '/theme/colors',
    iconComponent: { name: 'cil-people' }
  },
  {
    name: 'Stock',
    url: '/base/accordion',
    iconComponent: { name: 'cil-description' }
  },
 
  {
    name: 'Products',
    url: '/buttons',
    iconComponent: { name: 'cil-storage' }
  }
];
