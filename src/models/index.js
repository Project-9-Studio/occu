import { configureStore } from 'redux-starter-kit';
import user from './auth';
import jobs from './jobs';

const store = configureStore({
    reducer: {
      user,
      jobs
    }
});

export default store;
