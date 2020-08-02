import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-form-array-app';
  skillsForm: FormGroup;
  constructor(private fb: FormBuilder) {

    this.skillsForm = this.fb.group({
      name: '',
      skills: this.fb.array([]),
    });

  }

  //getter
  get skills(): FormArray {
    return this.skillsForm.get("skills") as FormArray
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    })
  }

  addSkills() {
    this.skills.push(this.newSkill());
  }

  removeSkill(i: number) {
    this.skills.removeAt(i);
  }

  onSubmit() {
    console.log(this.skillsForm.value);
  }
}
