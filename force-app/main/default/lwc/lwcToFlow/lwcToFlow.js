import { api, LightningElement, track } from 'lwc';

export default class LwcToFlow extends LightningElement {
    @api sapNumber;
    @api name;
    @api skills;
    @api level;
    @api yearsOfExperience;


    sapNumberChangeHandler(event){
        this.sapNumber = event.target.value;
    }
    nameChangeHandler(event){
        this.name = event.target.value;
    }

    levelChangeHandler(event){
        this.level = event.target.value;
    }
    yearsOfExperienceChangeHandler(event){
        this.yearsOfExperience = event.target.value;
    }
    
}