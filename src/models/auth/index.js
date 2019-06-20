import * as asyncActions from './actions';
import slice from './slice';

export { slice };
export const actions = { ...slice.actions, ...asyncActions };
export const reducer = slice.reducer;

export default reducer;
