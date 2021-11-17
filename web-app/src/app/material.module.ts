import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        MatButtonModule,
        MatStepperModule,
        MatSnackBarModule,
        MatMenuModule,
        MatIconModule,
    ],
    exports: [
        MatButtonModule,
        MatStepperModule,
        MatSnackBarModule,
        MatMenuModule,
        MatIconModule,
    ]

})
export class MaterialModule { }
