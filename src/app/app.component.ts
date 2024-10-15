import { Component } from '@angular/core';
import { Employe } from './models/employe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public employeList: Employe[] = [
    {id: 1, 'name':'Luis', country:'Colombia'},
    {id: 2, 'name':'Juan', country:'Venezuela'},
    {id: 3, 'name':'Pedro', country:'Ecuador'}
  ];

  public selectedEmploye: Employe = {id: 0, name: '', country: ''};

  public selectEmploye = (id: number) => {
    this.selectedEmploye = this.employeList.find((employe)=>employe.id == id)!;
  }

  public addOrEdit = () => {
    if(this.selectedEmploye.id) {
      alert('Data saved');
    } else {
      alert('add');
      this.employeList.push({
        id: this.employeList.length+1,
        name: this.selectedEmploye.name,
        country: this.selectedEmploye.country
      });      
      this.selectedEmploye.name = '';
      this.selectedEmploye.country = '';
    }

  }

  public cancelSelected = () => {
    this.selectedEmploye = {id: 0, name: '', country: ''};
  }
}
