import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-deletedialog",
  templateUrl: "./deletedialog.component.html",
  styleUrls: ["./deletedialog.component.scss"],
})
export class DeletedialogComponent implements OnInit {
  type = "";
  title = "";
  loader = false;
  constructor(
    public dialogRef: MatDialogRef<DeletedialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.type = data.info.testType;
    this.title = data.title;
    if (data.title == "Test Parameter Master") {
      this.type = data.info.name;
    }
    if (data.title == "FG Family Master") {
      this.type = data.info.fgFamilyName;
    }
    if (data.title == "FG Packaging Family") {
      this.type = data.info.fgPackagingFamilyName;
    }
    console.log(data);
  }

  ngOnInit(): void {}

  onConfirm(): void {
    // Close the dialog, return true
    if (this.data.title == "FG Family Master") {
      console.log("FG Family Master");
      this.dialogRef.close(true);
    }
    if (this.data.title == "Test Parameter Master") {
      console.log("Test Parameter Master");
      this.dialogRef.close(true);
    }
    if (this.data.title == "Test Type Master") {
      console.log("Test Type Master");
      this.dialogRef.close(true);
    }
    if (this.data.title == "FG Packaging Family") {
      console.log("FG Packaging Family");
      this.dialogRef.close(true);
    }
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
}
