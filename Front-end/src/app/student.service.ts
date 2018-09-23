import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
 
import { Student } from './student';
import { MessageService } from './message.service';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

   
@Injectable({ providedIn: 'root' })
export class StudentService {
 
  private studentsUrl = 'api/students';  // URL to web api
 
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
 
  /** GET heroes from the server */
    addStudent(student: Student): Observable<Student> {
        return this.http.post<Student>(this.studentsUrl, student, httpOptions).pipe(
            tap((student: Student) => this.log(`added student w/ id=${student.id} w/ FirstName=${student.FirstName}`)),
            catchError(this.handleError<Student>('addStudent'))
        );
    }

    getStudents(): Observable<Student[]> {
        return this.http.get<Student[]>(this.studentsUrl)
            .pipe(
                tap(students => this.log('fetched students')),
                catchError(this.handleError('getStudents', []))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add(`StudentService: ${message}`);
    }

}