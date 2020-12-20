<template>
  <div>
    <div v-if="$auth.loggedIn">
      <div>Logged In</div>
      <Button @click="$auth.logout()">Logout</Button>
    </div>

    <div v-else>
      <div>Logged Out</div>
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
export default class Authentication extends Vue {
}
</script>
