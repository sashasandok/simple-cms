// Redux
import { handleActions } from 'redux-actions'

// Actions
import actions from '../actions/tabs-actions'

export const initialState = {
  isFetching: false,
  error: '',
  items: [],
}

export default handleActions(
  {
    [actions.tabs.request]: state => ({
      ...state,
      isFetching: true,
      error: '',
    }),

    [actions.tabs.success]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      items: payload.items,
    }),

    [actions.tabs.error]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload.error,
    }),
  },
  initialState,
)
