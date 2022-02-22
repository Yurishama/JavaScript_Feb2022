import { Selector } from 'testcafe';

const label = Selector('label');

class Feature {
    constructor (text){
        this.label = label.withText(text);
        this.checkbox = this.label.find('input[type=checkbox');
    }
}

class Page{
    constructor(){
        this.nameImput = Selector('#developer-name');
        this.checkbox1 = Selector('#remote-testing');
        this.radio_windows = Selector('input[type=radio][value="Windows"]');
        this.radioButtonWindows = Selector('#windows');
        this.radioButtonLinux = Selector('#linux');
        this.menu = Selector('#preferred-interface');
        this.javascript = Selector('#preferred-interface > option:nth-child(2)');
        this.triedCheckbox = Selector('#tried-test-cafe');
        this.textArea = Selector('#comments');
        //Slider Bar
        this.sliderObj = Selector('#slider');
        this.slider = {
            handle: Selector('.ui-slider-handle'),
            tick: Selector('.slider-value')
        }


        this.featureList = [
            new Feature('Support for testing on remote devices'),
            new Feature('Re-using existing JavaScript code for testing'),
            new Feature('Running tests in background and/or in parallel in multiple browsers'),
            new Feature('Easy embedding into a Continuous integration system'),
            new Feature('Advanced traffic and markup analysis')
        ]
        
    }
}

export default new Page();