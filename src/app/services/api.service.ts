import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  baseUrl = "https://qtmswebapi.azurewebsites.net/api/";

  getTestType() {
    return this.http.post(`${this.baseUrl}TestTypeMaster/GetList`, {});
  }
  updateTestType(data) {
    return this.http.post(`${this.baseUrl}TestTypeMaster/Insert`, data);
  }
}
