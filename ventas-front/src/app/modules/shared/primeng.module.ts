import { NgModule } from '@angular/core';
import { TreeTableModule } from 'primeng/treetable';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import {InputMaskModule} from 'primeng/inputmask';
import { KeyFilterModule } from 'primeng/keyfilter';

@NgModule({
  imports: [
    TreeTableModule,
    TableModule,
    CalendarModule,
    DialogModule,
    DropdownModule,
    PanelModule,
    CheckboxModule,
    RadioButtonModule,
    InputMaskModule,
    KeyFilterModule
  ],
  exports: [
    TreeTableModule,
    TableModule,
    CalendarModule,
    DialogModule,
    DropdownModule,
    PanelModule,
    CheckboxModule,
    RadioButtonModule,
    KeyFilterModule,
    InputMaskModule
  ]
})
export class PrimengModule { }
