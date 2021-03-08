import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /* 
  <select> related functions
  */
  topics: string[] = ["All", "Topic A", "Topic B", "Topic C"]
  /* Adds a style class to <select> that changes font color from placeholder to default */
  optionSelected = false;
  topicSelected() {
    this.optionSelected = true;
  }

  /* 
  Form related functions 
  */
  formSubmitAttempted = false;
  subscribe(loginForm: NgForm, submit) {
    if (loginForm.value.selectTopic == "") loginForm.value.selectTopic = "All"
    this.formSubmitAttempted = true;
    if (loginForm.status == "INVALID") {
      console.log("Form invalid")
      if (this.showPrimaryAlert == true) this.showPrimaryAlert = false;
      this.showWarningAlert = true;
    } else {
      console.log(loginForm.value, loginForm.valid, submit)
      if (this.showWarningAlert == true) this.showWarningAlert = false;
      this.showPrimaryAlert = true;
    }
  }

  /*
  Alert related functions
  */
  showPrimaryAlert = false;
  showWarningAlert = false;
  closeAlert() {
    this.showPrimaryAlert = false;
    this.showWarningAlert = false;
  }

}
