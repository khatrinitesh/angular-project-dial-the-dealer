import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';



@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.scss']
})
export class UserregComponent {

  
  myForm!: FormGroup;
  name!: string;
  email!: string;
  password!: string;
  confirmpassword!: string;
  phone!: string;
  state!:string;
  city!:string;
  pincode!:number;
  address!:string;
  state2!:string;
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  constructor(private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => this._filter(value || '')),
    );
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
      address: ['', [Validators.required]],
      state2: ['', [Validators.required]]
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  countries: any = [
    {
      full: "Great Britain",
      short: "GB"
    },
    {
      full: "United States",
      short: "US"
    },
    {
      full: "Canada",
      short: "CA"
    }
  ];
  selectedCountry: string = "Great Britain";
  selectedCountryControl = new FormControl(this.selectedCountry);

  cities: any = [
    {
      full: "Mumbai",
      short: "MU"
    },
    {
      full: "Rajasthan",
      short: "RA"
    },
    {
      full: "Delhi",
      short: "DE"
    }
  ];
  selectedCity: string = "Mumbai";
  selectedCityControl = new FormControl(this.selectedCity);

  submitForm():void {
    const isAuthenticated = this.checkCredentials();
    if (isAuthenticated) {
      // Form is valid, handle form submission here
      this.router.navigate(['home']);
      console.log(this.myForm.valid); // Access form values using this.myForm.value
    } else {
      // Form is invalid, display error messages or take appropriate action
      console.log("Invalid credentials. Please try again.");
    }
  }
  private checkCredentials(): boolean {
    // Replace this with your actual authentication logic (e.g., API call, etc.)
    // For demonstration purposes, I'm using a simple hardcoded check
    return this.name === '' && this.email === '';
  }


}
