<template>
  <div>
    <label>
      <span>isDispatched</span><br>
      <input data-test-id="input" type="text" readonly :value="isDispatched ? 'true' : 'false'">
    </label>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isDispatched'])
  }
}
</script>
