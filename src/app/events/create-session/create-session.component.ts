import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  @Output() newSessionSave = new EventEmitter();
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  constructor() { }

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWords(['foo', 'not'])]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.duration,
      abstract: this.abstract
    });
  }
  saveSession(formvalues) {
    this.newSessionSave.emit(formvalues);
    }

     restrictedWords = (words: string[]) => {
       return (control: AbstractControl): {[key: string]: string} => {
               if (control && control.value !== undefined || control.value !== null) {
                if (!words) { return null; }
                const invalidWords = words
                .map(word => control.value.includes(word) ? word : null)
                .filter(word => word !== null);

                  return invalidWords && invalidWords.length > 0 ?
                        {restrictedWords: invalidWords.join(', ')} :
                        null;
                 }
      };
    }
  }
