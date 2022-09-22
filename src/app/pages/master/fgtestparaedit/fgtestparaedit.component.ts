import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-fgtestparaedit",
  templateUrl: "./fgtestparaedit.component.html",
  styleUrls: ["./fgtestparaedit.component.scss"],
})
export class FgtestparaeditComponent implements OnInit {
  constructor(public router: Router) {}
  arr = [
    {
      testType: "Bulk",
      parameter: "B1",
      value: 3.43,
    },
    {
      testType: "Preservative",
      parameter: "P1",
      value: 65,
    },
    {
      testType: "Micro",
      parameter: "M1",
      value: 0.0455,
    },
  ];
  ngOnInit(): void {}

  selectFgType(type) {
    console.log(type);
  }

  selectTestType(type) {
    console.log(type);
  }

  backToCourse() {
    this.router.navigate(["/master/fgtestparametermaster"]);
  }
}
