import { createSlice } from 'redux-starter-kit';
import mockJobs from './mockJobs';

const slice = createSlice({
    slice: 'jobs',
    initialState: {
        loading: false,
        list: mockJobs
    },
    reducers: {
        setLoading(state, action) {
            return state.loading = action.payload;
        },
        setJobs(state, action) {
            return state.list = action.payload;
        },
        addJob(state, action) {
            return state.list.push(action.payload);
        }
    }
});

export default slice.reducer;
export const actions = slice.actions;
export const selectors = slice.selectors;


