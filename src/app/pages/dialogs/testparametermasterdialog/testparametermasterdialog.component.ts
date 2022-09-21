import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-testparametermasterdialog",
  templateUrl: "./testparametermasterdialog.component.html",
  styleUrls: ["./testparametermasterdialog.component.scss"],
})
export class TestparametermasterdialogComponent implements OnInit {
  type: string = "";
  loader = false;
  testParameter: FormGroup;
  btn = "Save";
  constructor(
    public dialogRef: MatDialogRef<TestparametermasterdialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private fb: FormBuilder
  ) {
    this.type = data?.data?.testType ? data.data.testType : "";
    this.testParameter = this.fb.group({
      type: ["", [Validators.required]],
      name: ["", [Validators.required]],
      description: ["", [Validators.required]],
      measurement: ["", [Validators.required]],
    });
    this.btn = this.data.type == "update" ? "Update" : "Save";
    if (this.data.type == "update") {
      this.setValue();
    }
  }

  measurement = "";
  measurementArr = [
    "Min-Max Value",
    "Greater Than",
    "Less Than",
    "Greater Than Equal",
    "Less Than Equal",
  ];

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

  typeSelect(value: any) {
    this.type = value;
    console.log(value.testType);
  }
  measurementSelect(value: string) {
    this.measurement = value;
    console.log(value);
  }
  ngOnInit(): void {}
  onConfirm(): void {
    // if (this.data.type == "add") {
    //   console.log(this.type);
    //   this.dialogRef.close(true);
    // }
    // if (this.data.type == "update") {
    //   console.log(this.type);
    //   this.dialogRef.close(true);
    // }
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
  onSubmit(value) {
    if (this.testParameter.valid) {
      if (this.data.type == "add") {
        console.log(value, "add");
        this.dialogRef.close(true);
      }
      if (this.data.type == "update") {
        console.log(value, "update");
        this.dialogRef.close(true);
      }
    }
  }

  setValue() {
    this.testParameter.setValue({
      type: this.data.data.type,
      name: this.data.data.name,
      description: this.data.data.description,
      measurement: this.data.data.criteria,
    });
  }
}
