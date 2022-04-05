import io from 'socket.io-client';

const SERVER_URL = 'http://localhost:8080';

export default io(SERVER_URL);
