import {
	Component,
	Input
} from "@angular/core";

import { ControlWidget } from "angular2-schema-form";
import { TinyMCEComponent } from "./tinymce.component";
import { TinyMCEValueAccessor } from "./tinymce.valueaccessor";

@Component({
	selector: "ng2sf-tinymce",
	template: require("./tinymce.widget.html"),
})
export class TinyMCEWidget extends ControlWidget {
	constructor() {
		super();
	}
}
