import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavWrapperComponent } from './components/layout/nav-wrapper/nav-wrapper.component';

@NgModule({
  declarations: [NavWrapperComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
  ],
  exports: [NavWrapperComponent],
})
export class CoreModule {}
