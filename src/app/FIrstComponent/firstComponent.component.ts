import { Component } from "@angular/core";

@Component({
    selector: 'first-component',
    templateUrl: './firstComponent.component.html',
})
export class FirstComponent {
    serverId: number = 10;
    serverStatus: string = "Online";
    getServerStatus = () => {
        return this.serverStatus;
    };
};