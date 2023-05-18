import { boot } from "quasar/wrappers"
import { diceRolling, itemsAndRewards, newStoryRules } from 'src/boot/rules'
import EasyGpt from "easygpt";

const easyGpt = new EasyGpt().setApiKey(process.env.GPT_API_KEY.replaceAll('"',''));

async function ask(rules, command) {
    rules.forEach(x => {
        easyGpt.addRule(x)
    });

    easyGpt.addMessage(command)
    const result = await easyGpt.ask();
    return result;
}

class DungeonMaster {
    async init() {
        return await ask([...newStoryRules,...itemsAndRewards, ...diceRolling], "Elaborate a initial story");
    }

    async addMessage(command) {
        return await ask(["each 5 rounds create a small plot twist"], command);
    }
}

export const dungeonMaster = new DungeonMaster();

export default boot(({ app }) => {
    app.config.globalProperties.$dungeonMaster = dungeonMaster;
});