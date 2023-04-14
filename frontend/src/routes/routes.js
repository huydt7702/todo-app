import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/client/Home';
import Settings from '~/pages/client/Settings';
import Login from '~/pages/client/Login';
import Register from '~/pages/client/Register';
import MyDay from '~/pages/client/MyDay';
import Planned from '~/pages/client/Planned';
import Important from '~/pages/client/Important';
import AssignedToMe from '~/pages/client/AssignedToMe';
import Inbox from '~/pages/client/Inbox';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.myday, component: MyDay },
    { path: config.routes.planned, component: Planned },
    { path: config.routes.important, component: Important },
    { path: config.routes.assignedToMe, component: AssignedToMe },
    { path: config.routes.inbox, component: Inbox },
    { path: config.routes.settings, component: Settings, layout: HeaderOnly },
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.register, component: Register, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
