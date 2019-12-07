
export function selectUser(state) {
  return state.user
}

export function selectToken(state) {
  return state.app.token
}

export function selectReceivedUser(state) {
  return state.user.receivedUser
}