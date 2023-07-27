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

  constructor(private router: Router,private formBuilder: FormBuilder) { }


  myForm!: FormGroup;
  name!: string;
  email!: string;
  password!:string;
  confirmpassword!:string;
  phone!:number;
  state!:string;
  city!:string;
  pincode!:number;
  address!:string;
  alerts!:string;
  showSpinner:boolean=false;

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

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
      alerts: ['', [Validators.required]]
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

  
  submitForm() {
    if (this.myForm.valid) {
      // Form is valid, handle form submission here
      this.router.navigate([`home`]);
      console.log(this.myForm.value); // Access form values using this.myForm.value
    } else {
      // Form is invalid, display error messages or take appropriate action
      console.log("Form is invalid.");
    }
  }

  // register() : void {
  //   if(this.name == 'admin' && this.email == 'admin'){
  //    this.router.navigate(["home"]);
  //   }else {
  //     alert("Invalid credentials");
  //   }
  // }

}
