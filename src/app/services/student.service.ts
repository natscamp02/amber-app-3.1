import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APIResponse } from '../apiResponse';

@Injectable({
    providedIn: 'root',
})
export class StudentService {
    constructor(private http: HttpClient) {}
    apiUrl = environment.apiUrl;

    getAllStudents(): Observable<APIResponse> {
        return this.http.get<APIResponse>(`${this.apiUrl}/`);
    }

    getStudentByID(studentID: string): Observable<APIResponse> {
        return this.http.get<APIResponse>(`${this.apiUrl}/${studentID}`);
    }

    createStudent(postBody: any): Observable<APIResponse> {
        return this.http.post<APIResponse>(`${this.apiUrl}/`, postBody);
    }

    updateStudent(studentID: string, postBody: any): Observable<APIResponse> {
        return this.http.patch<APIResponse>(
            `${this.apiUrl}/${studentID}`,
            postBody
        );
    }

    deleteStudent(studentID: string): Observable<APIResponse> {
        return this.http.delete<APIResponse>(`${this.apiUrl}/${studentID}`);
    }
}
