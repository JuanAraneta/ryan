import moduleRegistry, { ModuleCodename } from "@/modules/moduleRegistry";
import { PageParams } from "@/types/generic";

type IContentItem = any; // This is the type of the response from CMS with the list of modules

export default function ModuleRenderer({
    modules,
    pageParams,
}: {
    modules: IContentItem[];
    pageParams: PageParams;
}) {
    return (
        <>
            {modules.map((module, index) => {
                const type = module.type as ModuleCodename;
                if (!moduleRegistry[type]) {
                    console.log("Module type not found in registry", type);
                    return null;
                }
                const Component = moduleRegistry[type].component;
                const morpher = moduleRegistry[type].morpher;
                const props = morpher ? morpher(module, pageParams) : module;
                return <Component key={index} {...props} />;
            })}
        </>
    );
}
