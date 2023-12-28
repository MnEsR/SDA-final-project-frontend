// import { Component, OnInit} from '@angular/core';
 

// @Component({
//   selector: 'app-category-emission',
//   templateUrl: './category-emission.component.html',
//   styleUrls: ['./category-emission.component.css']
// })
// export class CategoryEmissionComponent  implements OnInit{

//   questions: any[] = []; // Replace any with the actual type of your questions
//   selectedAnswers: { [key: string]: string } = {};

//   constructor(private categoryEmissionService: CategoryEmissionService) { }

//   ngOnInit(): void {

//     this.categoryEmissionService.getQuestions().subscribe(
//       (questions) => {
//         this.questions = questions;
//       },
//       (error) => {
//         console.error('Error fetching questions:', error);
//         // Handle error, display a message, or redirect
//       }
//     );
// }

// submitAnswers() {
//   // Send selected answers to the backend
//   this.categoryEmissionService.submitAnswers(this.selectedAnswers).subscribe(
//     (response) => {
//       console.log('Answers submitted successfully:', response);
//       // Optionally, you can navigate to the result component
//     },
//     (error) => {
//       console.error('Error submitting answers:', error);
//       // Handle error, display a message, or redirect
//     }
//   );

// }


// }
