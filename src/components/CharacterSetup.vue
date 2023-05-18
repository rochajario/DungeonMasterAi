<template>
    <q-stepper v-model="step" ref="stepper" animated flat style="background-color: transparent;"
        class="text-normal q-mx-md">
        <q-step :name="1" title="Welcome" icon="settings" :done="step > 1">
            <q-card flat bordered
                style="background: radial-gradient(circle, #ecd9b2 0%, #d3ba88 100%); width: 100%; height: 100%s;">
                <q-item>
                    <q-item-section>
                        <q-item-label class="text-primary text-bold text-h6">Dungeon Master</q-item-label>
                        <q-item-label caption class="text-secondary">
                            AI Assisted RPG Master
                        </q-item-label>
                    </q-item-section>
                </q-item>

                <q-separator />

                <q-card-section horizontal>
                    <q-card-section class="text-center" style="white-space: pre-line; width: 100%;">
                        <p class="text-bold text-primary">Greetings and welcome, adventurer.</p>
                        <p class="text-secondary">{{ `Here, magic and mystery abound, and great tales await those
                            willing to take up quests and deeds of valor. But be warned, the world can be a dangerous
                            place for the unprepared.\n\n Monsters and bandits lurk in the shadows, and the treacherous
                            politics of the ruling houses can change at a moment's notice. So choose your allies
                            carefully, keep your weapons honed and your wits sharp, and never forget that fortune favors
                            the bold.\n\nMay the gods smile upon your journeys, and guide you to great deeds and glory!`
                        }}</p>
                        <p class="text-bold text-primary">To start a new campaign you shall define your caracter's
                            traits and skills.</p>
                    </q-card-section>
                </q-card-section>
            </q-card>
        </q-step>

        <q-step :name="2" title="Background Information" icon="mdi-shield-account" :done="step > 1" caption="Required">
            <q-card flat bordered
                style="background: radial-gradient(circle, #ecd9b2 0%, #d3ba88 100%); width: 100%; height: 100%s;">
                <q-item>
                    <q-item-section>
                        <q-item-label class="text-primary text-bold text-h6">Character Setup</q-item-label>
                        <q-item-label caption class="text-secondary">
                            Traits and Backgound History
                        </q-item-label>
                    </q-item-section>
                </q-item>

                <q-separator />

                <q-card-section horizontal>
                    <q-card-section style="width: 100%;white-space: pre-line;" class="text-normal text-center">

                        <div class="q-pa-md column justify-center q-gutter-sm ">
                            <q-input dense outlined v-model='name' label="Character Name" />
                            <q-select dense outlined v-model='race' :options="raceOptions" label="Race" />
                            <q-select dense outlined v-model='gender' :options="genreOptions" label="Genre" />
                            <q-input type="textarea" v-model='backgroundStory' dense outlined label="Backgound History" />
                        </div>

                    </q-card-section>
                </q-card-section>
            </q-card>
        </q-step>

        <q-step :name="3" title="Skill's Definition" icon="mdi-arrow-decision-outline" :done="step > 2" caption="Required">
            <q-card flat bordered
                style="background: radial-gradient(circle, #ecd9b2 0%, #d3ba88 100%); width: 100%; height: 100%s;">
                <q-item>
                    <q-item-section>
                        <q-item-label class="text-primary text-bold text-h6">Character Setup</q-item-label>
                        <q-item-label caption class="text-secondary">
                            Skill's Definition
                        </q-item-label>
                    </q-item-section>
                </q-item>

                <q-separator />

                <q-card-section horizontal>
                    <q-card-section style="width: 100%;white-space: pre-line;" class="text-normal text-center">
                        <div class="q-pa-md row wrap justify-center">
                            <div style="width: 100%;" class="text-normal column">
                                <q-input class="col-6 q-px-sm" type="number" v-model='strength' dense outlined
                                    label="Strength" />
                                <q-input class="col-6 q-px-sm" type="number" v-model='dexterity' dense outlined
                                    label="Dexterity" />
                                <q-input class="col-6 q-px-sm" type="number" v-model='intelligence' dense outlined
                                    label="Intelligence" />
                                <q-input class="col-6 q-px-sm" type="number" v-model='wisdom' dense outlined
                                    label="Wisdom" />
                                <q-input class="col-6 q-px-sm" type="number" v-model='charisma' dense outlined
                                    label="Charisma" />
                            </div>
                        </div>
                    </q-card-section>
                </q-card-section>
            </q-card>
        </q-step>

    </q-stepper>
    <q-footer>
        <q-toolbar class="bg-grey-3 text-black row q-py-md justify-end">
            <div class="row justify-center q-gutter-md text-bold">
                <q-btn v-if="step > 1" flat color="primary" @click="previous" label="Previous" icon="mdi-arrow-left-circle"/>
                <q-btn v-if="step != 3" flat color="primary" @click="next" label="Next" icon-right="mdi-arrow-right-circle"/>
                <q-btn v-if="step == 3" color="primary" label="Start a new Adventure" class="primary" icon-right="mdi-sword-cross"
                    @click="startAdventure" />
            </div>
        </q-toolbar>
    </q-footer>
</template>
<script>
import Router from 'src/router';
import { Notify } from 'quasar';
import { useCharacterStore } from 'src/stores/characterData';
import { defineComponent } from 'vue';
export default defineComponent({
    name: "CharacterSetup",
    data() {
        return {
            message: 'To start a new adventure you shall define your character traits and skills.',
            step: 1,
            raceOptions: [
                'Dwarf', 'Elf', 'Human', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Tiefling'
            ],
            genreOptions: [
                'Male', 'Female'
            ],
            name: null,
            race: null,
            gender: null,
            backgroundStory: null,
            strength: null,
            dexterity: null,
            intelligence: null,
            wisdom: null,
            charisma: null,
        }
    },
    computed: {
        characterPayload() {
            return {
                name: this.name,
                race: this.race,
                gender: this.gender,
                backgroundStory: this.backgroundStory,
                strength: this.strength,
                dexterity: this.dexterity,
                intelligence: this.intelligence,
                wisdom: this.wisdom,
                charisma: this.charisma,
            }
        },
        store() {
            return new useCharacterStore();
        },
    },
    methods: {
        next() {
            if (this.step < 3) {
                this.step++;
            }
        },
        previous() {
            if (this.step >= 1) {
                this.step--;
            }
        },
        startAdventure() {
            this.setCharacterData();
            if (!this.store.characterReady) {
                Notify.create({
                    color: 'negative',
                    message: 'All fields are required to start a new adventure.'
                });
                return;
            }
            Router.push({ name: "Adventure" });
        },
        setCharacterData() {
            this.store.name = this.name;
            this.store.user = this.user;
            this.store.race = this.race;
            this.store.gender = this.gender;
            this.store.backgroundStory = this.backgroundStory;
            this.store.strength = this.strength;
            this.store.dexterity = this.dexterity;
            this.store.intelligence = this.intelligence;
            this.store.wisdom = this.wisdom;
            this.store.charisma = this.charisma;
        }
    },
})
</script>