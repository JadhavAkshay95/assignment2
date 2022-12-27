import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmpService {
  empList = [
    {
      id: '1',
      fname: 'akshay',
      lname: 'jadhav',
      job: 'Tech Lead',
      age: '25',
      startDate: '2020-12-10',
      endDate: '2021-12-10',
    },
    {
      id: '5',
      fname: 'Vijay',
      lname: 'jadhav',
      job: 'Tech Lead',
      age: '25',
      startDate: '2020-12-10',
      endDate: '2021-12-10',
    },
    {
      id: '2',
      fname: 'vikas',
      lname: 'jadhav',
      job: 'Manager',
      age: '25',
      startDate: '2018-11-10',
      endDate: '2022-2-10',
    },
    {
      id: '3',
      fname: 'John',
      lname: 'Selaa',
      job: 'QA',
      age: '25',
      startDate: '2022-12-10',
      endDate: '',
    },
    {
      id: '4',
      fname: 'Les',
      lname: 'Gerys',
      job: 'QA',
      age: '25',
      startDate: '2022-12-10',
      endDate: '',
    },
    {
      id: '10',
      fname: 'Lynda',
      lname: 'Gerys',
      job: 'Manager',
      age: '25',
      startDate: '2022-12-10',
      endDate: '',
    },
  ];
  constructor() {}

  getEmpList() {
    return this.empList;
  }

  deleteEmp(id: string) {
    this.empList = this.empList.filter((emp) => emp.id !== id);
  }

  addEmp(empPayload: any) {
    empPayload.id = Math.floor(Math.random() * 1000 + 1);
    this.empList.push(empPayload);
  }

  updateEmp(empPayload: any) {
    const index = this.empList.findIndex(
      (candidate) => candidate.id === empPayload.id
    );
    this.empList[index] = empPayload;
    this.getEmpList();
  }

  getJobTitleList() {
    return ['Manager', 'Tech Lead', 'Software Developer', 'QA', 'UI Developer'];
  }
}
