export interface Menu {
  path: string;
  name: string;
}

export const menuList: Menu[] = [
  {
    path: '/product',
    name: 'Products'
  },
  {
    path: '/about',
    name: 'About'
  },
  {
    path: 'client/contact',
    name: 'Contact'
  },
  {
    path: './client',
    name: 'Client'
  },
  {
    path: '/doc',
    name: 'Doc'
  },
  {
    path: '/vendeur',
    name: 'Vendeur'
  }
];
