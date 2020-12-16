import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../service/alert.service';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  message: any;
  private subscription: Subscription;
  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    
    this.subscription = this.alertService.getAlert()
    .subscribe(message => {
        switch (message && message.type) {
            case 'success':
                message.cssClass = 'alert alert-success';
                break;
            case 'error':
                message.cssClass = 'alert alert-danger';
                break;
        }

        this.message = message;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
}

}
