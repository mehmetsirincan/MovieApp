import {createStore,applyMiddleware} from 'redux';
import  createSagaMiddleWare from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas'

const SagaMiddleWare = createSagaMiddleWare()
const stores = createStore(reducers,applyMiddleware(SagaMiddleWare));
SagaMiddleWare.run(sagas);

export default stores;