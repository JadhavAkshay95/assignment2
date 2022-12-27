import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpService } from '../emp.service';
import { AddCandidateDialogComponent } from '../add-candidate-dialog/add-candidate-dialog.component';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss'],
})
export class EmpListComponent implements OnInit {
  empList: any = [];
  jobList: any = [];
  filterParams = {
    name: '',
    job: '',
    age: '',
    startDate: '',
    endDate: '',
  };
  constructor(private empService: EmpService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getEmpData();
    this.jobList = this.empService.getJobTitleList();
  }

  getEmpData() {
    this.empList = this.empService.getEmpList();
  }

  deleteEmp(id: string) {
    this.empService.deleteEmp(id);
    this.getEmpData();
  }

  clearFilter() {
    this.filterParams = {
      name: '',
      job: '',
      age: '',
      startDate: '',
      endDate: '',
    };
    this.getEmpData();
  }

  filterData() {
    this.getEmpData();

    if (this.filterParams?.name) {
      this.empList = this.empList.filter((emp: any) => {
        return (
          emp.fname
            .toLowerCase()
            .includes(this.filterParams?.name.toLowerCase()) ||
          emp.lname
            .toLowerCase()
            .includes(this.filterParams?.name.toLowerCase())
        );
      });
    }

    if (this.filterParams?.age) {
      this.empList = this.empList.filter((emp: any) => {
        return emp.age === this.filterParams?.age.toString();
      });
    }

    if (this.filterParams?.startDate) {
      this.empList = this.empList.filter((emp: any) => {
        return emp.startDate === this.filterParams?.startDate || emp.endDate === this.filterParams?.endDate;
      });
    }

    if (this.filterParams?.job) {
      this.empList = this.empList.filter((emp: any) => {
        return emp.job === this.filterParams?.job;
      });
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddCandidateDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editEmpData(emp) {
    const dialogRef = this.dialog.open(AddCandidateDialogComponent, {
      data: emp,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
