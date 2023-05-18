<template>
    <q-header elevated>
        <q-toolbar class="bg-grey-3 text-black q-pa-sm">
            <span class="q-subtitle-1 q-pl-md text-normal text-weight-bold text-secondary">
                <strong>Dungeon Master</strong> | <small class="text-thin text-secondary">{{ routeData.name }}</small>
            </span>
            <q-space />
            <q-btn round flat icon="more_vert" class="text-secondary">
                <q-menu auto-close :offset="[110, 0]">
                    <q-list style="min-width: 150px">
                        <q-item clickable>
                            <q-item-section>Erase messages</q-item-section>
                        </q-item>
                    </q-list>
                </q-menu>
            </q-btn>
        </q-toolbar>
    </q-header>
</template>
<script>
import Router from 'src/router'
import { privateRoutes } from 'src/router/routes';
import { defineComponent } from 'vue';
export default defineComponent({
    name: "HeaderBar",
    computed: {
        routeData() {
            return privateRoutes.findLast(x => x.name == "protectedRoutes").children.findLast(x => x.name == Router.currentRoute.value.name);
        }
    }
})
</script>