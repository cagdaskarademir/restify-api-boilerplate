import { ApiServer } from './server/index';

const apiServer = new ApiServer();
apiServer.startServer(+process.env.PORT || 8080);