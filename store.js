import { useMemo } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

let store;

const exampleInitialState = {
  cart: [],
};

export const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
};

// REDUCERS

export const cart = (state = exampleInitialState, action) => {
  // console.log('actionaction', action);
  switch (action.type) {
    case 'QTY_UP':
      if (state.length == 0) {
        return [{ ...state, id: action.id, name: action.name, quantity: action.up }];
      }
      const index = state.findIndex((x) => x.id === action.id);
      let newProduct = false;
      if (index === -1) {
        state.push({ id: action.id, name: action.name, quantity: action.up });
        newProduct = true;
      }
      return Object.assign(
        [],
        state.map((item, index) => {
          if (item.id === action.id && newProduct === false) {
            item.quantity += action.up;
          }
          return item;
        })
      );
    case 'QTY_DOWN':
      const cartList = state.filter((x) => {
        if (x.id === action.id && x.quantity <= action.down) {
          return false;
        }
        return x;
      });
      // console.log(cartList);
      return Object.assign(
        [],
        cartList.map((item) => {
          if (item.id === action.id) {
            item.quantity -= action.down;
          }
          return item;
        })
      );
    default:
      return state;
  }
};

export const productsInventory = (state = exampleInitialState, action) => {
  switch (action.type) {
    case 'PURCHASE':
      const ids = action.cart.map((item) => item.id);
      return Object.assign(
        [],
        state.map((item) => {
          if (ids.includes(item.id)) {
            item.inventory -= action.cart.filter((p) => p.id === item.id)[0].quantity;
          }
          return item;
        })
      );
    default:
      return state;
  }
};

export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case actionTypes.RESET:
      return {
        ...state,
        count: exampleInitialState.cart,
      };
    default:
      return state;
  }
};

//COMBINING ALL REDUCERS
const combinedReducer = combineReducers({
  cart,
  // OTHER REDUCERS WILL BE ADDED HERE
});

// ACTIONS

export const purchase = (cart) => {
  return { type: 'PURCHASE', cart };
};

export const quantityUp = (id, name, val) => {
  return { type: 'QTY_UP', id, name, up: val };
};

export const quantityDown = (id, name, val) => {
  return { type: 'QTY_DOWN', id, name, down: val };
};

export const resetCount = () => {
  return { type: actionTypes.RESET };
};

const persistConfig = {
  key: 'primary',
  storage,
  whitelist: ['cart'], // place to select which state you want to persist
};

const persistedReducer = persistReducer(persistConfig, combinedReducer);

function makeStore(initialState = exampleInitialState) {
  return createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware()));
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? makeStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
