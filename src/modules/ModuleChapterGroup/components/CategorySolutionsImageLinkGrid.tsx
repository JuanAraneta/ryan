import { Link } from "@/components/core/Link";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { ComponentLinkFragment } from "@/lib/contentful/fragments/ComponentLinkFragment";
import { CategorySolutionsImageLinkGridFragment } from "@/lib/contentful/query/GetModuleChapterGroupById/fragments/CategorySolutionsImageLinkGridFragment";
import { readFragment, ResultOf } from "gql.tada";
import { MdArrowForward } from "react-icons/md";

export const CategorySolutionsImageLinkGrid = ({
  data,
}: {
  data: ResultOf<typeof CategorySolutionsImageLinkGridFragment>;
}) => (
  <nav className="flex flex-col dsk:flex-row gap-6">
    {data.itemsCollection?.items.map((item, index) => {
      const link = readFragment(ComponentLinkFragment, item?.link);
      return (
        <Link
          key={index}
          link={item?.link}
          className="dark block relative size-full aspect-square overflow-hidden rounded-lg"
        >
          <img
            src={readFragment(AssetFragment, item?.image)?.url ?? ""}
            className="object-cover size-full"
          />
          <div
            className="absolute bottom-0 w-full p-6 backdrop-blur-xs flex items-center justify-between bg-gradient-to-b from-transparent to-black/50 [mask-image:var(--linear-gradient-mask)]"
            style={{
              "--linear-gradient-mask":
                "linear-gradient(to bottom, transparent 0px, black 24px)",
            }}
          >
            <span className="typo-heading-6 font-bold">{link?.label}</span>
            <MdArrowForward className="size-4" />
          </div>
        </Link>
      );
    })}
  </nav>
);
