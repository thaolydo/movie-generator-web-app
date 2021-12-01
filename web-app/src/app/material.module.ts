import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
    imports: [
        MatButtonModule,
        MatStepperModule,
        MatSnackBarModule,
        MatMenuModule,
        MatIconModule,
        MatDialogModule,
    ],
    exports: [
        MatButtonModule,
        MatStepperModule,
        MatSnackBarModule,
        MatMenuModule,
        MatIconModule,
        MatDialogModule,
    ]

})
export class MaterialModule { }
