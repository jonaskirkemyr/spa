export interface iEngine {
    // Dependencies required by template-engine. Install all dependencies with `npm install`
    readonly dependencies: string[];

    // Text of code to load the templates
    readonly loadTemplates: string;

    // Text of code to assign to Route.options.templateEngine
    readonly assignEngine: string;

    /*
     * Build scripts to add to package.json, where name (key) 
     * is the name of the script, and the value is the actual script
     */
    readonly scripts?: { [name: string]: string; };

    /* Optional pages to create which can be used by engine, where
     * filename is the file to create, and the value is the content of the file
     */
    readonly createPages?: { [filename: string]: string; };
}