import { configureStore } from 'redux-starter-kit';
import userReducer from './auth';

const store = configureStore({
    reducer: {
      user: userReducer
    }
});

export default store;
