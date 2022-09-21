import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-fgtestparametermaster",
  templateUrl: "./fgtestparametermaster.component.html",
  styleUrls: ["./fgtestparametermaster.component.scss"],
})
export class FgtestparametermasterComponent implements OnInit {
  loader = false;
  block = false;
  displayedColumns: string[] = ["id", "testType", "active", "action"];
  dataSource!: MatTableDataSource<any>;
  constructor() {}
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
}
