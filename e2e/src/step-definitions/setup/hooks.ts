import {After, Before} from "@cucumber/cucumber";
import {ScenarioWorld} from "./world";
import { env } from '../../env/parseEnv';

Before(async function(this: ScenarioWorld, scenario){
    console.log(`Running cucumber scenario ${scenario.pickle.name}`)

    const contextOptions = {
        recordVideo: {
            dir : `${env('VIDEO_PATH')}${scenario.pickle.name}`,
        }
    }

    return await this.init(contextOptions)
});

After(async function(this: ScenarioWorld, scenario){

    const {
        screen: {page, browser}
    } = this

    const scenarioStatus = scenario.result?.status;

    if (scenarioStatus === 'FAILED') {
        const screenshot = await page.screenshot({
            path: `${env('SCREENSHOT_PATH')}${scenario.pickle.name}.png`
        });
        this.attach(screenshot, 'image/png')
    }

    await browser.close()
    return browser
});