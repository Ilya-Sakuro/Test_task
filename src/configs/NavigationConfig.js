import {
  DashboardOutlined,
  ShoppingCartOutlined,
  CalendarOutlined,
  SmileOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

const dashBoardNavTree = [
  {
    key: 'dashboards',
    path: `${APP_PREFIX_PATH}/dashboards`,
    title: 'ОСНОВНЫЕ',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: 'dashboards-default',
        path: `${APP_PREFIX_PATH}/test`,
        title: 'Дашборд',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'catalog-default',
        path: `${APP_PREFIX_PATH}/test/catalog`,
        title: 'Каталог',
        icon: ShoppingCartOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'catalog-not-default1',
            path: `${APP_PREFIX_PATH}/dashboards/catalog/list`,
            title: 'Товары',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'catalog-not-default2',
            path: `${APP_PREFIX_PATH}/dashboards/catalog/list1`,
            title: 'Категории',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'catalog-not-default3',
            path: `${APP_PREFIX_PATH}/dashboards/catalog/list2`,
            title: 'Колекции',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'catalog-not-default4',
            path: `${APP_PREFIX_PATH}/dashboards/catalog/list3`,
            title: 'Комбо',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: 'order-default',
        path: `${APP_PREFIX_PATH}/dashboards/order`,
        title: 'Заказы',
        icon: CalendarOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'clients-default',
        path: `${APP_PREFIX_PATH}/dashboards/clients`,
        title: 'Клиенты',
        icon: SmileOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'clients-default-list',
            path: `${APP_PREFIX_PATH}/dashboards/clients/list`,
            title: 'Список клиентов',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'clients-default-list2',
            path: `${APP_PREFIX_PATH}/dashboards/clients/list1`,
            title: 'Группы клиентов',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
    ],
  },
];
const settingBoardNavTree = [
  {
    key: 'Setting',
    path: `${APP_PREFIX_PATH}/setting`,
    title: 'Основные',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: 'Setting',
        path: `${APP_PREFIX_PATH}/setting/clients/list/:userId`,
        title: 'Основные',
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...dashBoardNavTree, ...settingBoardNavTree];

export default navigationConfig;
