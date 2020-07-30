export default function({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.user) {
    console.log('there is no user')
    return redirect('/login')
  }
}
