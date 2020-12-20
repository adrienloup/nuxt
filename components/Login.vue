<template>
  <div>
    <div v-if="$auth.loggedIn">
      <h3>Logged In</h3>
      <Button @click="$auth.logout()">Logout</Button>
    </div>

    <div v-else>
      <h3>Logged Out</h3>
      <Button to="/login">Login</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Button from '@/components/Button.vue'

@Component({
  components: {
    Button
  }
})
export default class Login extends Vue {
}
</script>
