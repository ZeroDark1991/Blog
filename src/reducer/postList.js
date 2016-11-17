const postList = (state= {}, action) => {
  switch(action.type) {
    case 'ADD_POST':
      let post = {}
      post[action.post.id] = action.post
      return Object.assign({}, state, post)
      
    default:
      return state
  }
}

export default postList