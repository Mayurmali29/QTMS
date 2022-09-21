import { AfterViewInit, Component, ViewChild, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { AdddialogComponent } from "../../dialogs/adddialog/adddialog.component";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DeletedialogComponent } from "../../dialogs/deletedialog/deletedialog.component";

@Component({
  selector: "app-fgfamilymaster",
  templateUrl: "./fgfamilymaster.component.html",
  styleUrls: ["./fgfamilymaster.component.scss"],
})
export class FgfamilymasterComponent implements OnInit {
  loader = false;
  displayedColumns: string[] = ["fgFamilyName", "action"];
  dataSource!: MatTableDataSource<any>;
  arr = [
    {
      fgFamilyName: "Hair oil",
    },
    {
      fgFamilyName: "hair color",
    },
    {
      fgFamilyName: "Hair oil",
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
        placeholder: "Family Name",
        type: "add",
        title: "FG Family Master",
      },
    });
  }

  updateData(row) {
    this.dialog.open(AdddialogComponent, {
      minWidth: "30%",
      // height: '30%',
      data: {
        placeholder: "Family Name",
        type: "update",
        title: "FG Family Master",
        data: row,
      },
    });
  }

  deletetype(row) {
    const box = this.dialog.open(DeletedialogComponent, {
      minWidth: "30%",
      // height: '30%',
      data: {
        title: "FG Family Master",
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
