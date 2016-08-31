import {
	Component,
	Input
} from "@angular/core";

import {
	NG_VALUE_ACCESSOR,
	REACTIVE_FORM_DIRECTIVES
} from "@angular/forms";

import { BaseWidget } from "angular2-schema-form";
import { TinyMCEComponent } from "./tinymce.component";
import { TinyMCEValueAccessor } from "./tinymce.valueaccessor";

@Component({
	selector: "ng2sf-tinymce",
	template: require("./tinymce.widget.html"),
})
export class TinyMCEWidget extends BaseWidget {
	constructor() {
		super();
	}
}
