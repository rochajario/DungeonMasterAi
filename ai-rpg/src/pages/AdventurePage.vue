<template>
  <q-page>
    <div class="q-pa-md row justify-center">
      <div style="width: 100%;" class="q-mx-md">
        <section id="adventure">
          <article v-for="message in messageHistory" :key="message">
            <aside v-if="message.author == 'Dungeon Master'">
              <q-card flat bordered style="background: radial-gradient(circle, #ecd9b2 0%, #d3ba88 100%); width: 100%;"
                class="text-normal">
                <q-item>
                  <q-item-section>
                    <q-item-label caption class="text-secondary">
                      Dungeon Master
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-card-section horizontal>
                  <q-card-section style="width: 100%;white-space: pre-line;" class="text-center text-secondary">
                    <p v-for="paragraph in message.text" :key="paragraph">{{ paragraph }}</p>
                  </q-card-section>
                </q-card-section>
              </q-card>
            </aside>
            <aside v-else>
              <q-chat-message class="text-history q-mt-sm" bg-color="primary" text-color="accent"
                :text="message.text" :sent="message.sent">
              </q-chat-message>
            </aside>
          </article>
        </section>
      </div>
    </div>
    <q-footer>
      <q-toolbar class="bg-grey-3 text-black row q-py-md">
        <q-btn round flat icon="mdi-shield-account" class="text-primary" @click="open" />
        <q-btn round flat icon="mdi-sword-cross" class="text-primary" @click="seeItem" />
        <q-btn round flat icon="mdi-dice-multiple" class="text-primary" @click="rollDice" />
        <q-input v-model="message" rounded outlined dense class="WAL__field q-mx-md col-grow text-history text-secondary"
          bg-color="white" placeholder="What do you want to do?" />
        <q-btn round flat icon="mdi-comment-arrow-right-outline" class="text-primary" @click="askGpt" />
      </q-toolbar>
    </q-footer>
    <q-dialog v-model="dialog" position="top" full-width>
        <character-info />
    </q-dialog>
  </q-page>
</template>

<script>
import { Loading } from 'quasar';
import { useCharacterStore } from 'src/stores/characterData';
import { dungeonMaster } from 'src/boot/dungeonMaster';
import { defineComponent } from 'vue'
import CharacterInfo from 'src/components/CharacterInfo.vue';

export default defineComponent({
  name: 'AdventurePage',
  components: {
    'character-info': CharacterInfo
  },
  data() {
    return {
      dialog: false,
      messageHistory: [],
      message: '',
    }
  },
  created() {
    this.startAdventure();
  },
  computed: {
    character() {
      return useCharacterStore().getCharacterData;
    }
  },
  methods: {
    open() {
      this.dialog = true
    },
    async seeItem() {
      this.messageHistory.push(
        {
          author: this.character.name,
          text: ['/see-items'],
          sent: true,
        }
      );
      await this.askGpt();
    },
    async rollDice() {
      this.messageHistory.push(
        {
          author: this.character.name,
          text: ['/roll'],
          sent: true,
        }
      );
      await this.askGpt();
    },
    async startAdventure() {
      Loading.show({
        spinnerColor: 'secondary',
        messageColor: 'secondary',
        message: "Analizying player's data, Setting up the Fantasy World..."
      });
      dungeonMaster.init().then(res => {
        this.messageHistory.push({
          author: 'Dungeon Master',
          text: res.content.split("/\n"),
          sent: false,
        })
      })
      .finally(()=>{
        Loading.hide()
      });
    },
    answerDungeonMaster() {
      if (this.message) {
        this.messageHistory.push(
          {
            author: this.character.name,
            text: [this.message],
            sent: true,
          }
        )
        this.message = '';
      }
    },
    async askGpt() {
      this.answerDungeonMaster();
      const message = this.messageHistory.findLast(x => x.author != "Dungeon Master");
      Loading.show({
        spinnerColor: 'secondary',
        messageColor: 'secondary',
        message: "Generating a challenging experience."
      });
      dungeonMaster.addMessage(`${message.author}: ${message.text}`).then(res => {
        this.messageHistory.push({
          author: 'Dungeon Master',
          text: [res.content],
          sent: false,
        })
      })
      .finally(()=>{
        Loading.hide()
      });;
    }
  }
})
</script>
