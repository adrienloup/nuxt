import shareMutations from 'vuex-shared-mutations'

export default function ({ $auth, store }) {

  $auth.$storage.watchState('loggedIn', (loggedIn) => {

    if (!$auth.strategy.options.tokenRequired) {
      return
    }

    if (loggedIn) {
      const token = $auth.syncToken($auth.strategy.name)
      // fix for local auth scheme
      if (token && $auth.strategy._setToken) {
        $auth.strategy._setToken(token)
      }
      $auth.syncRefreshToken($auth.strategy.name)
    } else {
      // $auth.syncToken to false
      $auth.setToken($auth.strategy.name, null)
      $auth.setRefreshToken($auth.strategy.name, null)
    }

  })

  window.onNuxtReady((nuxt) => {
    shareMutations({
      predicate: [
        $auth.options.vuex.namespace + '/SET'
      ]
    })(store)
  })

}
