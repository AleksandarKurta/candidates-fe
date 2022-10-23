import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CandidateCreateService } from './candidate-create.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-candidate-create',
  templateUrl: './candidate-create.component.html',
  styleUrls: ['./candidate-create.component.scss']
})
export class CandidateCreateComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    jmbg:['', Validators.required],
    birthYear: ['', Validators.required],
    mobile: ['', Validators.required],
    note: ['', Validators.required],
    employed: [''],
  });

  constructor(
    private fb: FormBuilder,
    private candidateCreateService: CandidateCreateService,
    private snackBar: MatSnackBar
  ) { }

  onSubmit() {
    this.candidateCreateService.createCandidate(this.profileForm.value).subscribe((response: any) => {
      if (response.status === 'success') {
        this.snackBar.open('Candidate created successfully', '', {
          duration: 5000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: 'success'
        });
      }
    });
  }

  ngOnInit(): void {

  }
}
