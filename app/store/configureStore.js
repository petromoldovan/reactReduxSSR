import { createStore } from 'redux'
import coreReducer from '../reducers';


const configureStore = (initialState) => {
    const store = createStore(
        coreReducer,
        initialState
    )

    return store
}

export default configureStore;
