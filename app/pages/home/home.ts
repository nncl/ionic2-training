import {Component} from '@angular/core';
import {AboutPage} from '../about/about';
import {PeopleService} from '../../providers/people-service/people-service';

@Component({
    templateUrl: 'build/pages/home/home.html',
    providers: [PeopleService]
})

export class HomePage {
    public name;
    public people: any;
    aboutPage = AboutPage;

    constructor(public peopleService : PeopleService) {
        this.name = 'Cauê';
    }
}
