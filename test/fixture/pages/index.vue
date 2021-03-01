<template>
  <div>
    <div class="is-dispatched">
      <div class="is-dispatched__title-container">
        <span>isDispatched</span>
      </div>
      <div>
        <input data-test-id="input" type="text" readonly :value="isDispatched ? 'true' : 'false'">
      </div>
    </div>
    <div class="sequence">
      <div class="sequence__title-container">
        <span>call sequence</span>
      </div>
      <div>
        <ul class="sequence__list">
          <li
            v-for="item in getSequence"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'isDispatched',
      'getSequence'
    ])
  }
}
</script>

<style>
.sequence {
  margin-block-start: 0.5rem;
}
</style>
