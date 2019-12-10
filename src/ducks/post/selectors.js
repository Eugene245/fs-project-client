export function selectPosts(state) {
  const { postsIds } = state.post
  const posts = state.post.postsById

  return postsIds.reduce((result, id) => {
    const post = posts[id]
    return post ? [...result, post] : result
  }, [])
}

export function selectPagination(state) {
  return state.post.pagination
}

export function selectHasMorePagesStatus(state) {
  const { pagination } = state.post
  return pagination.limit + pagination.offset < pagination.rowCount
}

export function selectHasPostsStatus(state) {
  return !!state.post.postsIds.length
}

export function selectOffsetPagination(state) {
  return state.post.pagination.offset
}

export function selectPost(state, id) {
  return state.post.postsById[id]
}

export function selectPostAdded(state) {
  return state.post
}