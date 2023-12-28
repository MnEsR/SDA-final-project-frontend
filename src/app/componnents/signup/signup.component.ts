import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from 'express';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
 export class SignupComponent {
  registerForm: any;
  messageService: any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    // private messageService: MessageService,
    private router: Router
  ) { }

  get fullName() {
    return this.registerForm.controls['fullName'];
  }

  get email() {
    return this.registerForm.controls['email'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }

  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }

  submitDetails() {
    const postData = { ...this.registerForm.value };
    delete postData.confirmPassword;
    this.authService.registerUser(postData as User).subscribe(
      (      response: any) => {
        console.log(response);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Register successfully' });
        this.router.navigate(['login'])
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      }
    )
  }


 }




























// implements OnInit {

//   signupForm:FormGroup;
//   hide: boolean = false;

//   constructor(private fb: FormBuilder) {
    
//       this.signupForm = this.fb.group({
//         email: ['', [Validators.required, Validators.email]],
//         username: ['', Validators.required],
//         password: ['', [Validators.required, Validators.minLength(6)]]
        
//       });
//   }

//   ngOnInit(): void {}
  
  

//   onSignup() {
//     if (!this.signupForm.valid) {
//       return;
//     }

    
//     // For simplicity
//     console.log('Signup form submitted:', this.signupForm.value);
//   }

// }
