<template>
  <div class="dashboard-container">
    <ArcGISMap></ArcGISMap>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ArcGISMap from '@/components/ArcGIS/map.vue'

export default {
  name: 'dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  components: { ArcGISMap }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
