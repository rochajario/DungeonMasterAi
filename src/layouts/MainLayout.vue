<template>
  <div class="WAL position-relative" :style="style">
    <q-layout view="lHh Lpr lFf" class="WAL__layout shadow-3" container>
      <header-bar/>
      <q-page-container class="bg-grey-2">
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { computed } from 'vue'
import HeaderBar from 'src/components/HeaderBar.vue'

export default {
  name: 'MainLayout',
  components: {
    "header-bar": HeaderBar,
  },
  setup() {
    const $q = useQuasar()
    const style = computed(() => ({
      height: $q.screen.height + 'px'
    }));
    const route = computed(() => ({
      icon: 'mdi-sword-cross',
      name: 'Skills'
    }));
    return {
      style,
      route
    }
  }
}
</script>