import { createStore } from 'redux'
import coreReducer from '../reducers';


const configureStore = (preloadedState) => {
    const store = createStore(
        coreReducer,
        preloadedState
    )


    return store
}

export default configureStore