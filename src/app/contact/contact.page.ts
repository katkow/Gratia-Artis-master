import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})

export class ContactPage implements OnInit {

  subject: string = "";
  message: string = "";


  constructor(public emailComposer: EmailComposer) { }

  ngOnInit() {
  }

  sendEmail() { //dziala tylko na telefonie

    this.emailComposer.open({
      to: 'gratiaartis.kontakt@gmail.com',
      subject: this.subject,
      body: this.message
     }); 
     
  }

}
