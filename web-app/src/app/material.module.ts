import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    imports: [
        MatButtonModule,
        MatStepperModule,
        MatSnackBarModule,
    ],
    exports: [
        MatButtonModule,
        MatStepperModule,
        MatSnackBarModule,
    ]

})
export class MaterialModule { }
