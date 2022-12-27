import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-add-candidate-dialog',
  templateUrl: './add-candidate-dialog.component.html',
  styleUrls: ['./add-candidate-dialog.component.scss'],
})
export class AddCandidateDialogComponent implements OnInit {
  candidateForm: FormGroup;
  jobList: any = [];

  isEdit = false;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddCandidateDialogComponent>,
    private empService: EmpService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit(): void {
    console.log('data', this.data);
    this.candidateForm = this.formBuilder.group({
      fname: [null, Validators.required],
      lname: [null, Validators.required],
      job: [null, Validators.required],
      age: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [''],
    });

    this.jobList = this.empService.getJobTitleList();

    if (this.data) {
      this.isEdit = true;
      this.candidateForm.patchValue(this.data);
    }
  }

  submit() {
    if (this.candidateForm.valid) {
      if (this.isEdit) {
        this.candidateForm.value['id'] = this.data.id;
        this.empService.updateEmp(this.candidateForm.value);
      } else {
        this.empService.addEmp(this.candidateForm.value);

      }
      this.candidateForm.reset();
      this.dialogRef.close();
    }
  }
}
