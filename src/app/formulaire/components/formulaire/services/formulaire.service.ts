import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, delay, mapTo, Observable, of} from "rxjs";
import {FormulaireValueModels} from "../models/formulaire-value.models";


Injectable()

export class FormulaireService{
  constructor(private http: HttpClient) {
  }
  // saveUserInfo(formValue:FormulaireValueModels):Observable<boolean>{
  //   return this.http.post('https://localhost:8080').pipe(
  //     mapTo(true),
  //     delay(2000),
  //     catchError(()=> of(false).pipe(
  //       delay(2000)
  //     ))
  //   );
  // }
}
