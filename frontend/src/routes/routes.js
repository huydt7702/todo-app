import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/client/Home';
import Settings from '~/pages/client/Settings';
import Login from '~/pages/client/Login/Login';
import Register from '~/pages/client/Register/Register';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.settings, component: Settings, layout: HeaderOnly },
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.register, component: Register, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
