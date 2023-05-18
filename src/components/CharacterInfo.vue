<template>
    <q-card flat bordered
        class="text-normal"
        style="background: radial-gradient(circle, #ecd9b2 0%, #d3ba88 100%);">
        <q-item>
            <q-item-section>
                <q-item-label class="text-primary text-bold text-h6">{{ characterData.name }}</q-item-label>
                <q-item-label caption class="text-secondary">
                    {{ characterData.race }} - {{ characterData.gender }}
                </q-item-label>
            </q-item-section>
        </q-item>

        <q-separator />

        <q-card-section horizontal>
            <q-card-section class="col-9">
                {{ characterData.backgroundStory }}
            </q-card-section>

            <q-separator vertical />

            <q-card-section class="text-center q-ml-md">
                <ul class="text-primary">
                    <li><strong>Strenght: </strong><em class="text-secondary">{{ characterData.strength }}</em></li>
                    <li><strong>Dexterity: </strong><em class="text-secondary">{{ characterData.dexterity }}</em>
                    </li>
                    <li><strong>Intelligence: </strong><em class="text-secondary">{{ characterData.intelligence
                    }}</em></li>
                    <li><strong>Wisdom: </strong><em class="text-secondary">{{ characterData.wisdom }}</em></li>
                    <li><strong>Charisma: </strong><em class="text-secondary">{{ characterData.charisma }}</em></li>
                </ul>
            </q-card-section>
        </q-card-section>
    </q-card>
</template>
<script>
import { useCharacterStore } from 'src/stores/characterData';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "CharacterInfo",
    data() {
        return {
            tab: 'generalInfo'
        }
    },
    computed: {
        characterData() {
            return useCharacterStore().getCharacterData;
        }
    }
})
</script>
<style scoped>
ul {
    list-style-type: none;
}
</style>