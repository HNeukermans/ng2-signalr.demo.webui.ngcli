import { Component } from '@angular/core';
import { SignalR, SignalRConnection, IConnectionOptions } from 'ng2-signalr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _signalR: SignalR)  {
 }
ngOnInit() {

 }

 connect() {
    let o: IConnectionOptions;
    let conx = this._signalR.createConnection();
    conx.status.subscribe((s) => console.warn(s.name));
    conx.start().then((c) => {

      let listener = c.listenFor('Hello');
      listener.subscribe(() => {
              console.log('received hello');

      });
      c.invoke('SayHello').then(() => {

      });
    });
  }

   connect2() {
    let o: IConnectionOptions;
    let conx = this._signalR.connect().then((c) => {

      let listener = c.listenFor('Hello');
      listener.subscribe(() => {
              console.log('received hello');

      });
      c.invoke('SayHello').then(() => {

      });
    });
  }


}
