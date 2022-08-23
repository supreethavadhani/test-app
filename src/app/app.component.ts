import { Component, Input } from '@angular/core';
import { ServiceAgent } from 'mv-core/src/mv-core/mv-form-core/serviceAgent';
import { FormData } from 'mv-core/src/mv-core/mv-form-core/formData';
import { CustomerFd, CustomerForm } from './customerForm';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';

  public form: CustomerForm;
  public fd: CustomerFd;
  public constructor(sa: ServiceAgent) {
    this.form = CustomerForm.getInstance();
    this.fd = new FormData(this.form, sa);
  }
}
