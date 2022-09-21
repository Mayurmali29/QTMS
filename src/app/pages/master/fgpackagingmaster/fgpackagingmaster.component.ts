import { AfterViewInit, Component, ViewChild, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { AdddialogComponent } from "../../dialogs/adddialog/adddialog.component";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DeletedialogComponent } from "../../dialogs/deletedialog/deletedialog.component";

@Component({
  selector: "app-fgpackagingmaster",
  templateUrl: "./fgpackagingmaster.component.html",
  styleUrls: ["./fgpackagingmaster.component.scss"],
})
export class FgpackagingmasterComponent implements OnInit {
  loader = false;
  displayedColumns: string[] = ["fgPackagingFamilyName", "action"];
  dataSource!: MatTableDataSource<any>;
  arr = [
    {
      fgPackagingFamilyName: "Bottle",
    },
    {
      fgPackagingFamilyName: "Sachet",
    },
    {
      fgPackagingFamilyName: "Pouch",
    },
    {
      fgPackagingFamilyName: "Tube",
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
        placeholder: "Packaging Name",
        type: "add",
        title: "FG Packaging Family",
      },
    });
  }

  updateData(row) {
    this.dialog.open(AdddialogComponent, {
      minWidth: "30%",
      // height: '30%',
      data: {
        placeholder: "Packaging Name",
        type: "update",
        title: "FG Packaging Family",
        data: row,
      },
    });
  }

  deletetype(row) {
    const box = this.dialog.open(DeletedialogComponent, {
      minWidth: "30%",
      // height: '30%',
      data: {
        title: "FG Packaging Family",
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
