import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';


@NgModule({
    imports: [
        MatButtonModule,
        MatStepperModule,
    ],
    exports: [
        MatButtonModule,
        MatStepperModule,
    ]

})
export class MaterialModule { }
