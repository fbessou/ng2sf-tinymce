# TinyMCE widget for Angular2 Schema Form

## Install

```bash
    npm install ng2sf-tinymce
```

## Usage

Add `Ng2SFTinyMCEModule` wherever you need it in your dependency tree:

```js

    import { SchemaFormModule } from "angular2-schema-form";
    import { Ng2SFTinyMCEModule } from "ng2sf-tinymce";

    @NgModule({
        imports: [
            BrowserModule,
            /*...*/
            SchemaFormModule,
            Ng2SFTinyMCEModule
        ],
        declarations: [AppComponent, /*...*/]
    })
    export class AppModule {}
```

Register the TinyMCEWidget in your `WidgetRegistry`:

```js
    import { WidgetRegistry } from "angular2-schema-form"; 
	import { TinyMCEWidget } from "ng2sf-tinymce";

    @Component({/*...*/})
    export class AppComponent {
        constructor(widgetRegistry: WidgetRegistry) {
            widgetRegistry.register("tinymce", TinyMCEWidget);
        }
    }
```

Use the `tinymce` widget's id in your schema:

```js
    {
        "type": "object",
        "properties": {
            "type": "string",
            "description": "A richtext input",
            "widget": "tinymce"
        }
    }
```
