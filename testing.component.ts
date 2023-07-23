import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent{
  constructor( public dialogref:MatDialogRef<TestingComponent>,public dialog:MatDialog){}
  Onclick():void{
    this.dialogref.close();
  }
}



