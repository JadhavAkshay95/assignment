import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from '../contact.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit, OnDestroy {
  contactList = [];
  subscription$ = new Subscription();

  constructor(private contactService: ContactService, private router: Router) {}

  /**
   * Get contact list
   */
  ngOnInit(): void {
    this.subscription$ = this.contactService
      .getContactList()
      .subscribe((data) => {
        this.contactList = data;
      });
  }

  /**
   * Delete contact based on id
   * @param id
   */
  deleteContact(id) {
    this.contactList = this.contactService.deleteContact(id);
  }

  /**
   * Change status of contact
   * @param id
   */
  changeStatus(id) {
    const contact = this.contactService.getContact(id.toString());
    contact['status'] = contact['status'] === 'active' ? 'inactive' : 'active';
    this.contactList = this.contactService.updateContact(contact);
  }

  /**
   * Redirect to edit page
   * @param id
   */
  edit(id) {
    this.router.navigate(['/edit', id]);
  }
  /**
   * Unsubscribe subscription
   */
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
