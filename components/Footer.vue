<template>
  <footer>

    <Slots>
      <template>Slot 1</template>
    </Slots>

    <Slots>
      <template>Slot 2</template>
      <template slot="slotA">Replace A</template>
    </Slots>

    <Slots>
      <template>Slot 3</template>
      <template slot="slotB">Replace B</template>
    </Slots>

  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Slots from '@/components/Slots.vue'

@Component({
  components: {
    Slots
  }
})
export default class Footer extends Vue {
}
</script>