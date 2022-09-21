import { AfterViewInit, Component, ViewChild, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { AdddialogComponent } from "../../dialogs/adddialog/adddialog.component";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { TestparametermasterdialogComponent } from "../../dialogs/testparametermasterdialog/testparametermasterdialog.component";
import { DeletedialogComponent } from "../../dialogs/deletedialog/deletedialog.component";
@Component({
  selector: "app-testparametermaster",
  templateUrl: "./testparametermaster.component.html",
  styleUrls: ["./testparametermaster.component.scss"],
})
export class TestparametermasterComponent implements OnInit {
  loader = false;
  block = false;
  displayedColumns: string[] = [
    "type",
    "name",
    "description",
    "criteria",
    "action",
  ];
  dataSource!: MatTableDataSource<any>;
  arr = [
    {
      type: "Bulk",
      name: "abc",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, hic!",
      criteria: "Min-Max Value",
    },
    {
      type: "Packaging",
      name: "cba",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, hic!",
      criteria: "Greater Than",
    },
    {
      type: "Micro",
      name: "xyz",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, hic!",
      criteria: "Less Than",
    },
    {
      type: "Preservative",
      name: "zyx",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, hic!",
      criteria: "Less Than Equal",
    },
  ];

  constructor(private dialog: MatDialog) {}
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.arr);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  addtype() {
    this.dialog.open(TestparametermasterdialogComponent, {
      // maxWidth: "40%",
      // minWidth: "30%",
      // height: '30%',
      data: {
        type: "add",
      },
      panelClass: "test_parameter_master",
    });
  }
  updateData(row) {
    this.dialog.open(TestparametermasterdialogComponent, {
      data: {
        type: "update",
        data: row,
      },
      panelClass: "test_parameter_master",
    });
  }

  deleteCountry(row) {
    this.dialog.open(DeletedialogComponent, {
      minWidth: "30%",
      // height: '30%',
      data: {
        title: "Test Parameter Master",
        info: row,
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
