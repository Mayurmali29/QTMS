import { AfterViewInit, Component, ViewChild, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { AdddialogComponent } from "../../dialogs/adddialog/adddialog.component";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DeletedialogComponent } from "../../dialogs/deletedialog/deletedialog.component";

@Component({
  selector: "app-testtypemaster",
  templateUrl: "./testtypemaster.component.html",
  styleUrls: ["./testtypemaster.component.scss"],
})
export class TesttypemasterComponent implements OnInit {
  loader = false;
  block = false;
  displayedColumns: string[] = ["id", "testType", "active", "action"];
  dataSource!: MatTableDataSource<any>;
  arr = [
    {
      id: 1,
      testType: "Bulk",
      active: true,
    },
    {
      id: 2,
      testType: "Packaging",
      active: true,
    },
    {
      id: 3,
      testType: "Micro",
      active: true,
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
    this.dialog.open(AdddialogComponent, {
      minWidth: "30%",
      // height: '30%',
      data: {
        placeholder: "Test Type",
        type: "add",
        title: "Test Type Master",
      },
    });
  }
  updateData(row) {
    this.dialog.open(AdddialogComponent, {
      minWidth: "30%",
      // height: '30%',
      data: {
        title: "Test Type Master",
        placeholder: "Test Type",
        type: "update",
        data: row,
      },
    });
  }

  deletetype(row, i) {
    const box = this.dialog.open(DeletedialogComponent, {
      minWidth: "30%",
      // height: '30%',
      data: {
        title: "Test Type Master",
        info: row,
      },
    });
    box.afterClosed().subscribe((result) => {
      if (result) {
        document.querySelector(`#delete${i}`).classList.add("hide");
        document.querySelector(`#edit${i}`).classList.add("hide");
        document.querySelector(`#block${i}`).classList.remove("hide");
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // activate(i: number) {
  //   console.log("ac");
  //   document.querySelector(`#block${i}`).classList.remove("hide");
  //   document.querySelector(`#actiavte${i}`).classList.add("hide");
  // }
  blockmeth(i) {
    document.querySelector(`#delete${i}`).classList.remove("hide");
    document.querySelector(`#edit${i}`).classList.remove("hide");
    document.querySelector(`#block${i}`).classList.add("hide");
  }

  rowcl(r: any) {
    console.log(r);
  }
}
