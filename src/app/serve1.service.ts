import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Serve1Service {
  public employees=[
    {"name":"Rock","id":389,"dept":"CSE"},
    {"name":"Pratik","id":342,"dept":"ECE"},
    {"name":"Adnan","id":189,"dept":"IT"}
  ]
getEmployee(){
  return this.employees
}

  constructor() { }
}
