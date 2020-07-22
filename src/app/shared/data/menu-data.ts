import { Menu } from '@delon/theme';

export const MENU_DATA: Menu[] = [
  {
    text: '',
    group: true,
    children: [
      {
        text: 'Dashboard',
        link: '/dashboard',
        icon: { type: 'icon', value: 'appstore' },
      },
      {
        text: 'Workers',
        icon: { type: 'icon', value: 'cluster' },
        link: '/workers',
      },
      {
        text: 'Targets',
        icon: { type: 'icon', value: 'aim' },
        link: '/targets',
      },
      {
        text: 'System',
        icon: { type: 'icon', value: 'setting' },
        children: [
          {
            text: 'Users',
            icon: { type: 'icon', value: 'user' },
            link: '/users',
          },
        ],
      },
    ],
  },
];
