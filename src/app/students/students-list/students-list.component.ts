import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from 'src/app/students/student.service';
import { Student } from 'src/app/students/student';

@Component({
    selector: 'app-students-list',
    templateUrl: './students-list.component.html',
    styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
    data: any = {
        name: '',
        email: '',
        cohort: '',
        phoneNumber: '',
        grade: '',
        registrationFee: ''
    };
    action: 'add' | 'edit' = 'add';
    isEditing: boolean = false;

    students: Student[] = [];

    constructor(private studentsService: StudentService) { }

    ngOnInit(): void {
        this.getAllStudents();
    }

    private getAllStudents(): void {
        this.studentsService.getAllStudents().subscribe(res => {
            if (res.status === 'success')
                this.students = res.data!.students;
        });
    }

    private addStudent(): void {
        this.studentsService.createStudent(this.data).subscribe(res => {
            if (res.status !== 'success') return;

            this.getAllStudents();
            this.toggleForm('add');
        });
    }

    private updateStudent(): void {
        this.studentsService.updateStudent(this.data._id, { ...this.data, _id: undefined }).subscribe(res => {
            if (res.status !== 'success') return;

            this.getAllStudents();
            this.toggleForm('add');
        });
    }

    public editStudent(student: Student): void {
        this.data = { ...student };
        this.toggleForm('edit');
    }

    public deleteStudent(id: string): void {
        this.studentsService.deleteStudent(id).subscribe(res => {
            this.getAllStudents();
        })
    }

    handleSubmit(form: NgForm) {
        this.action === 'add' ? this.addStudent() : this.updateStudent();
        form.resetForm();
    }

    toggleForm(state?: 'add' | 'edit'): void {
        this.action = state ? this.action = state : this.action === 'add' ? 'edit' : 'add';
    }

}
