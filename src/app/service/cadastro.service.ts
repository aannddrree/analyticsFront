import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Cadastro } from 'src/model/cadastro';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:8080/analytics/api/v1/cadastro';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Cadastro[]> {
    return this.http.get<Cadastro[]>(apiUrl)
      .pipe(
        tap(cadastro => console.log('leu os dados')),
        catchError(this.handleError('findAll', []))
      );
  }

  findById(id: number): Observable<Cadastro> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Cadastro>(url).pipe(
      tap(_ => console.log(`leu o dado id=${id}`)),
      catchError(this.handleError<Cadastro>(`findById id=${id}`))
    );
  }

  save(cadastro): Observable<Cadastro> {
    return this.http.post<Cadastro>(apiUrl, cadastro, httpOptions).pipe(
      tap((cadastro: Cadastro) => console.log(`adicionou o dado com w/ id=${cadastro._id}`)),
      catchError(this.handleError<Cadastro>('save'))
    );
  }

  put(id, cadastro): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, cadastro, httpOptions).pipe(
      tap(_ => console.log(`atualiza o dado com id=${id}`)),
      catchError(this.handleError<any>('put'))
    );
  }

  delete (id): Observable<Cadastro> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Cadastro>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o cadastro com id=${id}`)),
      catchError(this.handleError<Cadastro>('deleteCadastro'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}