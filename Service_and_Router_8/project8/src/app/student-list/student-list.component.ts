import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  studentList: Student[];
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentList = this.studentService.studentList;
  }

}
