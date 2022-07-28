import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APIResponse } from '../apiResponse';

@Injectable({
    providedIn: 'root',
})
export class StudentService {
    private APIUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getAllStudents(): Observable<APIResponse> {
        return this.http.get<APIResponse>(`${this.APIUrl}/`);
    }

    getStudentByID(studentID: string): Observable<APIResponse> {
        return this.http.get<APIResponse>(`${this.APIUrl}/${studentID}`);
    }

    createStudent(postBody: any): Observable<APIResponse> {
        return this.http.post<APIResponse>(`${this.APIUrl}/`, postBody);
    }

    updateStudent(studentID: string, postBody: any): Observable<APIResponse> {
        return this.http.patch<APIResponse>(
            `${this.APIUrl}/${studentID}`,
            postBody
        );
    }

    deleteStudent(studentID: string): Observable<APIResponse> {
        return this.http.delete<APIResponse>(`${this.APIUrl}/${studentID}`);
    }
}
