<template>
  <q-header elevated>
    <q-toolbar class="bg-grey-3 text-black q-pa-sm">
      <span
        class="q-subtitle-1 q-pl-md text-normal text-weight-bold text-secondary"
      >
        <strong>Dungeon Master</strong> |
        <small class="text-thin text-secondary">{{ routeData.name }}</small>
      </span>
    </q-toolbar>
  </q-header>
</template>
<script>
import Router from "src/router";
import { privateRoutes } from "src/router/routes";
import { defineComponent } from "vue";
export default defineComponent({
  name: "HeaderBar",
  computed: {
    routeData() {
      return privateRoutes
        .findLast((x) => x.name == "protectedRoutes")
        .children.findLast((x) => x.name == Router.currentRoute.value.name);
    },
  },
});
</script>
