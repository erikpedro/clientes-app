import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavebarComponent } from './navebar/navebar.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    NavebarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavebarComponent,
    SidebarComponent
  ]
})
export class TempleteModule { }
