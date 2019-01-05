// babel
import 'babel-polyfill'

// redux
import { createActions } from 'redux-actions'

// data
import tabs from '../data/tabs.json'

// mappers
import mapper from '../mappers/tabs-mapper'

const actions = createActions({
  tabs: {
    request: x => x,
    success: x => x,
    error: x => x,
  },
})

export default actions

export const getTabs = () => async dispatch => {
  const data = tabs.map(mapper)

  dispatch(actions.tabs.request())
  try {
    dispatch(
      actions.tabs.success({
        items: data,
      }),
    )
  } catch (e) {
    dispatch(actions.tabs.error({ error: e }))
    console.log(e)
  }
}
