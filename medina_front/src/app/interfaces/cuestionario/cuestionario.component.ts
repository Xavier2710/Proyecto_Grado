import { Component } from '@angular/core';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent {
  currentQuestionIndex = 0;

  questions = [
    {
      question: '¿Cuál es la capital de Francia?',
      options: ['París', 'Londres', 'Madrid', 'Berlín'],
      answer: ''
    },
    {
      question: '¿Cuál es el planeta más grande del sistema solar?',
      options: ['Marte', 'Júpiter', 'Saturno', 'Venus'],
      answer: ''
    },
    // Agrega más preguntas aquí si es necesario
  ];

  selectAnswer(option: string) {
    this.questions[this.currentQuestionIndex].answer = option;
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  submitQuiz() {
    console.log(this.questions);
    alert('Cuestionario enviado');
  }
}

