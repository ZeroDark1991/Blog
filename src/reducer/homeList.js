const homeList = (state= [], action) => {
  switch(action.type) {
    case 'PUSH_HOMELIST':
      return [
        ...state,
        ...action.list
      ]
    default:
      return state
  }
}

export default homeList