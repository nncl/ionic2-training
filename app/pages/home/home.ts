import {Component} from '@angular/core';
import {AboutPage} from '../about/about';

@Component({
    templateUrl: 'build/pages/home/home.html'
})

export class HomePage {
    public name;
    aboutPage = AboutPage;

    constructor() {
        this.name = 'Cauê';
    }
}
