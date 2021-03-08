import { JsonPipe } from '@angular/common';
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

  /* <select> functions */
  topics: string[] = ["All", "Topic A", "Topic B", "Topic C"]
  /* Adds a style class to <select> that changes font color from placeholder to default */
  optionSelected = false;
  topicSelected() {
    this.optionSelected = true;
  }

  formSubmitAttempted = false;
  subscribe(loginForm: NgForm, submit) {
    if (loginForm.value.selectTopic == "") loginForm.value.selectTopic = "All"
    this.formSubmitAttempted = true;
    if (loginForm.status == "INVALID") {
      console.log("Form invalid")
    } else {
      console.log(loginForm.value, loginForm.valid, submit)
    }
  }
}
