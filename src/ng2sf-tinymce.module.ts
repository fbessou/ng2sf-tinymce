import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { BaseWidget } from "angular2-schema-form";
import { TinyMCEComponent } from "./tinymce.component";
import { TinyMCEWidget } from "./tinymce.widget";

@NgModule({
	imports: [BrowserModule],
	declarations: [TinyMCEComponent],
	exports: [TinyMCEWidget]
})
export class Ng2SFTinyMCEModule {}
