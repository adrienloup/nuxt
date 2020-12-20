<template>
  <div>
    <div v-if="$auth.loggedIn">
      <h2>Logged In</h2>
      <Button @click="$auth.logout()">Logout</Button>
    </div>

    <div v-else>
      <h2>Logged Out</h2>
      <Button to="/login">Login</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Button from '@/components/base/Button.vue'

@Component({
  components: {
    Button
  }
})
export default class Authentication extends Vue {
}
</script>
