import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fgtestparametermaster",
  templateUrl: "./fgtestparametermaster.component.html",
  styleUrls: ["./fgtestparametermaster.component.scss"],
})
export class FgtestparametermasterComponent implements OnInit {
  constructor() {}
  arr = [];
  ngOnInit(): void {}
  selectFgType(type) {
    console.log(type);
  }

  selectTestType(type) {
    console.log(type);
  }
}
