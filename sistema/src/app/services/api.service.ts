import { UtilsService } from 'src/app/services/utils.service';
import { RegisterUser } from './../interfaces/registerUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { LoginUser } from '../interfaces/loginUser';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient,
    private utilsService: UtilsService) { }

  registerUser(user: any): Observable<RegisterUser> {
    const formData = new FormData();

    formData.append('name', user.name)
    formData.append('email', user.email)
    formData.append('age', user.age)
    formData.append('image', user.image)
    formData.append('password', user.password)
    formData.append('confirmPassword', user.confirmPassword)

    return this.httpClient.post<RegisterUser>(enviroment.BASE_URL + '/auth/register/user', formData)
    .pipe(
      catchError((err) => {
        if(err.status === 0 && err.status !== 404) {
          this.utilsService.showError('Ocorreu um erro na aplicação, tente novamente!')
        }else if(err.status === 404) {
          this.utilsService.showError(err.error.message)
        }else {
          this.utilsService.showError('Ocorreu um erro no servidor, tente mais tarde!')
        }
        return throwError(() => err)
      })
    )
  }


  loginUser(user: any): Observable<LoginUser>{
    return this.httpClient.post<LoginUser>(enviroment.BASE_URL + '/auth/login', user)
    .pipe(
      retry(2),
      catchError((err) => {
        if(err.status === 0 && err.status !== 404) {
          this.utilsService.showError('Ocorreu um erro na aplicação, tente novamente!')
        }else if(err.status === 404) {
          this.utilsService.showError(err.error.message)
        }else {
          this.utilsService.showError('Ocorreu um erro no servidor, tente mais tarde!')
        }
        return throwError(() => err)
      })
    )
  }
}