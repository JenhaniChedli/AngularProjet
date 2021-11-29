import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
public contact={
  name:"isi kef",
  email:"chedlijenhani@gmail.com",
  telephone:"+21620410944",
  logo:"assets/images/islain.png",
  location:"assets/images/location.PNG"
}
  constructor() { }

  ngOnInit(): void {
  }

}
