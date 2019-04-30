import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core'
import { ApiService } from './api.service'


@Component({
    selector: 'questions',
    templateUrl: './questions.component.html'
})
export class QuestionsComponent {

    question = {}
    questions
    
    constructor(private api: ApiService, private route: ActivatedRoute) {}

    ngOnInit() {

        
        const quizId = this.route.snapshot.paramMap.get('quizId');
        this.api.getQuestions(quizId).subscribe(res => {
            this.questions = res
        })
    }
}