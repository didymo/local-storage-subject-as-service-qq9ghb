import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { LocalStorageService } from "./local-storage.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  myInfo$ = this._localStorageService.myData$;
  form: FormGroup;

  constructor(
    private _localStorageService: LocalStorageService,
    private _fb: FormBuilder
  ) {}

  ngOnInit() {
    this._localStorageService.clearAllLocalStorage();
    this._initForm();
  }

  private _initForm() {
    this.form = this._fb.group({
      name: "",
      age: ""
    });
  }

  setInfo() {
    const { name, age } = this.form.value;
    this._localStorageService.setInfo({
      name,
      age
    });
  }

  clearInfo() {
    this._localStorageService.clearInfo();
  }

  clearAll() {
    this._localStorageService.clearAllLocalStorage();
  }
}
