
// API Testing
import { HttpClientTestingModule } from '@angular/common/http/testing';
export const APIImports = [
    HttpClientTestingModule
];


// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';
export const MaterialImports = [
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    CdkTableModule
];

// Others
export { RouterTestingModule } from '@angular/router/testing';
