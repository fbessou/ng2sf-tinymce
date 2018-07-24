import { Component } from "@angular/core";

import {ControlWidget} from "ngx-schema-form";
import { TinyMCEComponent } from "./tinymce.component";
import { TinyMCEValueAccessor } from "./tinymce.valueaccessor";

@Component({
	selector: "ng2sf-tinymce",
	templateUrl: "./tinymce.widget.html",
})
export class TinyMCEWidget extends ControlWidget {}
