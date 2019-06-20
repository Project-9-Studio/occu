import { createSlice } from 'redux-starter-kit';

export default createSlice({
    slice: 'user',
    initialState: null,
    reducers: {
        setUser(_, action) {
            return action.payload;
        }
    }
});
