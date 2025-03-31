## CMS:

The CMS should have a contentType called "page", and this page should include a field named modules, which will be a list of linked items corresponding to the modules that will be rendered in the application.

## Code:

For each module created in the CMS, the corresponding component should be created within the modules directory. Additionally, it should be registered in the moduleRegistry file, including both the component and the morpher. The morpher is the function responsible for making the CMS data compatible with the component.
