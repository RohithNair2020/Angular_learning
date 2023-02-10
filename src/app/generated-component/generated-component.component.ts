import { Component } from '@angular/core';

@Component({
  selector: 'app-generated-component',
  templateUrl: './generated-component.component.html',
  styleUrls: ['./generated-component.component.css']
})
export class GeneratedComponentComponent {
  buttonText: string = 'Inactive';
  isActive: boolean = false;
  serverStatusText: string =  'The server is off';
  inputText: string = '';
  serversList: string[] = [];

  constructor() {
    setTimeout(() => {
      this.buttonText = 'Active';
      this.isActive = true;
    }, 3000);
  }

  switchOnServer() {
    this.serverStatusText = 'The server is switched on!';
  };

  handleInputTextChange(event: any) {
    this.inputText = event.target.value;
  }

  addNewServer() {
    this.serversList.push(this.inputText);
  }
}
