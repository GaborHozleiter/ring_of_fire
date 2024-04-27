import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatInputModule, FormsModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose,
    
  ],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent implements OnInit{
  name : string = '';
  constructor(  public dialogRef: MatDialogRef<DialogAddPlayerComponent>) {

  }

  ngOnInit(): void {
      
  }

  onNoClick() {
    this.dialogRef.close();
  }

  

}
