import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxsStoreModule } from '../store/store.module';
import { NavWrapperComponent } from './components/layout/nav-wrapper/nav-wrapper.component';

@NgModule({
  declarations: [NavWrapperComponent],
  imports: [
    CommonModule,
    NgxsStoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSnackBarModule,
  ],
  exports: [NavWrapperComponent],
})
export class CoreModule {}
