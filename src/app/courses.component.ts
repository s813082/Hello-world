import { CoursesService } from './courses/courses.service';

import {Component} from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ gettitle() }}</h2>
        <ul>
            <li *ngFor=" let course of courses">
                {{course}}
            </li>
        </ul>
    `
})

export class CoursesComponent{
    title = "List of coureses";

    courses;

    constructor(){
        let service = new CoursesService();
        this.courses = service.getCourses();
    }

    gettitle(){
        return this.title
    }
}