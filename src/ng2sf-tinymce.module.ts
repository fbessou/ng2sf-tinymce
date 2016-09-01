import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { TinyMCEComponent } from "./tinymce.component";
import { TinyMCEWidget } from "./tinymce.widget";
import { TinyMCEValueAccessor } from "./tinymce.valueaccessor";

@NgModule({
	imports: [BrowserModule, ReactiveFormsModule],
	declarations: [TinyMCEComponent, TinyMCEWidget, TinyMCEValueAccessor],
	entryComponents: [TinyMCEWidget],
	exports: [TinyMCEWidget]
})
export class Ng2SFTinyMCEModule {}
