export const addPost = (post) => {
  return {
    type: 'ADD_POST',
    post
  }
}

export const pushHomeList = (list) => {
  return {
    type: 'PUSH_HOMELIST',
    list
  }
}