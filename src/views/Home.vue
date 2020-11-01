<template>
  <div>
    <div class="flex justify-center">
      <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
    </div>
    <px-assets-table :assets="assets" v-if="!isLoading"></px-assets-table>
  </div>
</template>

<script>
import api from '@/api'
import PxAssetsTable from '@/components/PxAssetsTable'
export default {
  name: 'Home',
  components: { PxAssetsTable },
  data () {
    return {
      assets: [],
      isLoading: false
    }
  },
  created  () {
    this.isLoading = true
    api.getAssets()
      .then(assets => (this.assets = assets))
      .finally(() => (this.isLoading = false))
  }
}
</script>

<style scoped>

</style>
