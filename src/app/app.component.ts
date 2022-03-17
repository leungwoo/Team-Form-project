import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  errorMessage = '';
  onInput(member: string) {
    this.newMemberName = member;
    console.log(this.newMemberName);
  }

  addMember() {
    // check to see if there is no name throw error
    if (!this.newMemberName) {
      this.errorMessage = 'please enter a name';
      return;
    }
    // if it passes the above check then dont appear
    this.errorMessage = '';
    // add memeber to an array
    this.members.push(this.newMemberName);
    // reset the value to default
    this.newMemberName = '';
    console.log(this.newMemberName);
  }
}
