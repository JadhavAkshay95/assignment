import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contactList = [
    {
      firstName: 'Akshay',
      lastName: 'Jadhav',
      email: 'akshay@gmail.com',
      phone: '9834589783',
      status: 'active',
      id: 1,
    },{
      firstName: 'Emma',
      lastName: 'watson',
      email: 'emma@gmail.com',
      phone: '9123498778',
      status: 'active',
      id: 2,
    },
  ];

  constructor() {}

  /**
   * Get list of contact
   */
  getContactList(): Observable<any[]> {
    return of(this.contactList);
  }

  /**
   * Get contact by contact id
   * @param contactId
   */
  getContact(contactId): {} {
    return this.contactList.find(
      (contact) => contact.id.toString() === contactId
    );
  }
  /**
   * Update contact
   * @param contactToUpdate
   */
  updateContact(contactToUpdate): any[] {
    return (this.contactList = this.contactList.map((contact) =>
      contact.id === contactToUpdate.id
        ? Object.assign({}, contact, contactToUpdate)
        : contact
    ));
  }
  /**
   * Add new contact
   * @param contact
   */
  addContact(contact: any): void {
    contact['id'] = Math.random() * 100;
    this.contactList.push(contact);
  }

  /**
   * Delete contact
   * @param contactId
   */
  deleteContact(contactId): any[] {
    return (this.contactList = this.contactList.filter(
      (contact) => contact.id !== contactId
    ));
  }
}
