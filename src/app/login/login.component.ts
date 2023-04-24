import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;

  constructor(private formBuilder :FormBuilder, private http: HttpClient) {
    this.loginForm = this.formBuilder.group({
      email : ['', Validators.required],
      password: ['', Validators.required]
    })
  }

/*
  onSubmit(){
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.http.post('api/login',{email, password}).subscribe(
      response => {
        const token = response.token;
      }, error => {
        console.error;
      }
    )
  }
*/

  ngOnInit(): void {
  }

}
