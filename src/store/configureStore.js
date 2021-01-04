import { createStore } from 'redux';
import controlReducer from '../reducer/controlReducer';

export default () => {
    const store  = createStore(
        controlReducer
    )

    return store;
}