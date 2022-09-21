import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-adddialog",
  templateUrl: "./adddialog.component.html",
  styleUrls: ["./adddialog.component.scss"],
})
export class AdddialogComponent implements OnInit {
  type: string = "";
  loader = false;
  btn = "Save";
  title = "";
  placeholder = "";
  constructor(
    public dialogRef: MatDialogRef<AdddialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.type = data?.data?.testType ? data.data.testType : "";
    this.placeholder = data.placeholder;
    if (data.title == "FG Family Master" && data.type == "update") {
      this.type = data.data.fgFamilyName;
    }
    if (data.title == "FG Packaging Family" && data.type == "update") {
      this.type = data.data.fgPackagingFamilyName;
    }
    this.btn = this.data.type == "update" ? "Update" : "Save";
    this.title = this.data.title;
  }

  ngOnInit(): void {}
  onConfirm(): void {
    if (this.data.type == "add" && this.data.title == "FG Family Master") {
      console.log(this.type, "family master");
      this.dialogRef.close(true);
    }
    if (this.data.type == "update" && this.data.title == "FG Family Master") {
      console.log(this.type, "family master");
      this.dialogRef.close(true);
    }
    if (
      this.data.title == "FG Packaging Family" &&
      this.data.type == "update"
    ) {
      console.log(this.type, "FG Packaging Family");
      this.dialogRef.close(true);
    }
    if (this.data.title == "FG Packaging Family" && this.data.type == "add") {
      console.log(this.type, "FG Packaging Family");
      this.dialogRef.close(true);
    }

    if (this.data.type == "add" && this.data.title == "Test Type Master") {
      console.log(this.type, "Test Type Master");
      this.dialogRef.close(true);
    }
    if (this.data.type == "update" && this.data.title == "Test Type Master") {
      console.log(this.type, "Test Type Master");
      this.dialogRef.close(true);
    }
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
}
