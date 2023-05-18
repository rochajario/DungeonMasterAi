<template>
    <q-page class="text-normal">
        <character-setup />
    </q-page>
</template>
<script>
import CharacterSetup from 'src/components/CharacterSetup.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "CharacterInformationPage",
    components: {
        'character-setup': CharacterSetup,
    },
    data() {
        return {
        }
    }
})
</script>