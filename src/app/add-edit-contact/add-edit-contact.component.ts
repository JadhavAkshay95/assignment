import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.scss'],
})
export class AddEditContactComponent implements OnInit {
  contactForm: any;
  isUpdateMode: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(`^[A-Za-z]+$`)]],
      lastName: ['', [Validators.required, Validators.pattern(`^[A-Za-z]+$`)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(`^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$`),
        ],
      ],
      phone: ['', [Validators.required, Validators.pattern(`^[0-9]{10}$`)]],
      status: ['inactive'],
      id: [''],
    });
    /**
     * Check whether is is present in url
     */
    this.route.params.subscribe((data) => {
      if (data.id) {
        this.isUpdateMode = true;
        this.contactForm.patchValue(this.contactService.getContact(data.id));
      }
    });
  }

  /**
   * Get form controls
   */
  get control() {
    return this.contactForm.controls;
  }

  /**
   * Add or update contact
   */
  addUpdateContact(): void {
    this.isUpdateMode
      ? this.contactService.updateContact(this.contactForm.value)
      : this.contactService.addContact(this.contactForm.value);
    this.contactForm = {};
    this.router.navigate(['/']);
  }

  /**
   * Reset form
   */
  resetForm() {
    this.contactForm.patchValue({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      status: 'inactive',
    });
    this.contactForm.markAsPristine();
    this.contactForm.markAsUntouched();
  }
}
