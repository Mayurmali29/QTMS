import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

@Component({
  selector: "app-fgtestparametermaster",
  templateUrl: "./fgtestparametermaster.component.html",
  styleUrls: ["./fgtestparametermaster.component.scss"],
})
export class FgtestparametermasterComponent implements OnInit {
  loader = false;
  block = false;
  toggle = false;
  displayedColumns: string[] = ["fgcode", "specificCode", "action"];
  displayed2Columns: string[] = [
    "testType",
    "parameter",
    "criteria",
    "value",
    "action",
  ];
  dataSource!: MatTableDataSource<any>;
  editDataSource!: MatTableDataSource<any>;

  // criteria
  minmax = false;
  oneField = false;
  boolean = false;
  // criteria

  constructor() {}
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  arr = [
    {
      fgcode: "FG-13384939939",
      specificCode: "SP-2984903893",
    },
    {
      fgcode: "FG-13384939940",
      specificCode: "SP-2984903894",
    },
    {
      fgcode: "FG-13384939941",
      specificCode: "SP-2984903896",
    },
  ];
  fgCode = [
    {
      fgc: "fg0189029029 - 100ml",
    },
    {
      fgc: "fg0189029030 - 150ml",
    },
    {
      fgc: "fg0189029031u - 200ml",
    },
  ];

  fgtype = [
    {
      type: "bulk",
    },
    {
      type: "Micro",
    },
    {
      type: "Packaging",
    },
    {
      type: "Preservative",
    },
  ];

  para = [
    {
      parameter: "b1",
      criteria: "min-max",
    },
    {
      parameter: "b2",
      criteria: "gte",
    },
    {
      parameter: "p1",
      criteria: "lte",
    },
    {
      parameter: "p2",
      criteria: "Yes/No",
    },
  ];

  unitArr = [
    {
      unit: "Unit 1",
    },
    {
      unit: "Unit 2",
    },
  ];

  addArray = [];

  // selected
  selFgType = "";
  selFgCode = "";
  selFgPara = "";
  selFgUnit = "";
  gte = "";
  min = "";
  max = "";
  booleanradio = "";
  criteria = "";
  //
  testType: string;
  paraType: string;
  selUnit: string;
  //selected

  radioChange(event) {
    console.log(event.value);
    this.booleanradio = event.value;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.arr);
  }
  //Seletion variable start------------------
  selectFgCode(type) {
    console.log(type);
    this.selFgCode = type;
  }

  selectTestType(type) {
    console.log(type);
    this.selFgType = type;
  }
  selectParaType(type) {
    console.log(type);
    this.selFgPara = type.parameter;
    this.criteria = type.criteria;
    console.log(type.criteria);
    if (type.criteria == "min-max") {
      this.minmax = true;
      this.oneField = false;
      this.boolean = false;
    }

    if (
      type.criteria == "gte" ||
      type.criteria == "lte" ||
      type.criteria == "lt" ||
      type.criteria == "gt"
    ) {
      this.minmax = false;
      this.oneField = true;
      this.boolean = false;
    }
    if (type.criteria == "Yes/No") {
      this.minmax = false;
      this.oneField = false;
      this.boolean = true;
    }
  }
  selectUnit(type) {
    console.log(type);
    this.selFgUnit = type;
  }
  //Seletion variable end----------------------------

  addtestpara() {
    console.log("add");
    this.toggle = true;
  }
  back() {
    this.toggle = false;
    this.editDataSource = new MatTableDataSource();
    this.testType = "";
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  applyFilteradd(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.editDataSource.filter = filterValue.trim().toLowerCase();

    if (this.editDataSource.paginator) {
      this.editDataSource.paginator.firstPage();
    }
  }

  add() {
    let data;
    if (this.criteria == "boolean") {
      data = {
        testType: this.selFgType,
        parameter: this.selFgPara,
        value: this.booleanradio,
        criteria: this.criteria,
      };
    } else if (this.criteria == "min-max") {
      data = {
        testType: this.selFgType,
        parameter: this.selFgPara,
        value: `${this.min}-${this.max}`,
        criteria: this.criteria,
      };
    } else {
      data = {
        testType: this.selFgType,
        parameter: this.selFgPara,
        value: this.gte,
        criteria: this.criteria,
      };
    }
    console.log(data);
    console.log(this.testType);
    this.addArray.push(data);
    this.addArray = this.addArray.sort((a, b) =>
      a.testType.localeCompare(b.testType)
    );
    this.editDataSource = new MatTableDataSource(this.addArray);
    this.editDataSource.paginator = this.paginator;
    this.editDataSource.sort = this.sort;
    //
    this.gte = "";
    // this.testType = "";
    this.selUnit = "";
    this.booleanradio = "";
    // ------//
    this.minmax = false;
    this.oneField = false;
    this.boolean = false;

    //
  }
}
