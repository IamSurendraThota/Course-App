import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ControlItem } from 'src/app/models/frontend';
import { NotificationService } from 'src/app/shared/services';
import { markFormGroupTouched } from 'src/app/shared/utils/form';
import { regex, regexErrors } from '../../../../shared/utils';
@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
  form: FormGroup;
  isInline: boolean = false;
  regexErrors = regexErrors;
  items: ControlItem[];
  showSpinner = false;

  constructor(private fb: FormBuilder, private notification: NotificationService) {
    this.isInline = true;
    this.items = [
      { label: 'First', value: 1 },
      { label: 'Second', value: 2 },
      { label: 'Third', value: 3 },
      { label: 'Fourth', value: 4 },
      { label: 'Fifth', value: 5 }
    ];

    this.form = this.fb.group({
      input: [null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(regex.email)
        ]
      }],
      password: [null, {
        updateOn: 'blur', validators: [
          Validators.required
        ]
      }],
      autocomplete: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      select: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      checkboxes: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      radios: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      date: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      dateRange: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
    });
  }

  ngOnInit(): void {
  }

  onPatchValue(): void {
    this.form.patchValue({
      input: 'test',
      password: 'qwerty',
      select: 2
    });
  }

  onSubmit(): void {
    console.log('onSubmit');
    if (!this.form.valid) {
      markFormGroupTouched(this.form);
    }
  }

  onToggleInline() {
    this.isInline = !this.isInline;
  }

  onToggleDisable(): void {
    if (this.form.enabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  onToggleSpinner(): void {
    this.showSpinner = !this.showSpinner;
  }

  onSuccess(): void {
    this.notification.success('Everything is fine!');
  }

  onError(): void {
    this.notification.error('Oops! Something is wrong');
  }
}
