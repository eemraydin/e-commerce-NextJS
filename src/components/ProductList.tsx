import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import Pagination from "./Pagination";

const PRODUCT_PER_PAGE = 8;

const ProductList = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) => {
  const wixClient = await wixClientServer();

  let productQuery = wixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.name || "")
    .eq("collectionIds", categoryId)
    .hasSome(
      "productType",
      searchParams?.type ? [searchParams.type] : ["physical", "digital"]
    )
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 999999)
    .limit(limit || PRODUCT_PER_PAGE)
    // .ascending("name")
    .skip(
      searchParams?.page
        ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE)
        : 0
    );

  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort.split(" ");
    const validSortFields = ["price", "name", "lastUpdated"];

    if (validSortFields.includes(sortBy)) {
      if (sortType === "asc") {
        productQuery = productQuery.ascending(sortBy);
      } else if (sortType === "desc") {
        productQuery = productQuery.descending(sortBy);
      }
    } else {
      console.error(`Invalid sort field: ${sortBy}`);
    }
  }

  // Execute query
  const response = await productQuery.find();

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 items-center justify-between flex-wrap">
      {response.items.map((product: products.Product) => (
        <Link
          href={"/" + product.slug}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] "
          key={product._id}
        >
          <div className="relative w-full h-80">
            {/* First Image */}
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt="Product Image 1"
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            {/* Second Image */}
            {product.media?.items && (
              <Image
                src={product.media?.items[1]?.image?.url || "/product.png"}
                alt="Product Image 2"
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            )}
          </div>

          <div className="flex justify-between mt-4">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">{product.price?.price}</span>
          </div>
          {product.additionalInfoSections && (
            <div
              className="text-sm text-gray-500 mt-2"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  product.additionalInfoSections.find(
                    (section: any) => section.title === "ShortDesc"
                  )?.description || ""
                ),
              }}
            ></div>
          )}

          <button className="mt-4 rounded-md bg-main text-white w-max py-2 px-4 text-xs hover:bg-white hover:text-main border border-main transition-colors duration-200 ease-in-out">
            Add to Cart
          </button>
        </Link>
      ))}
      {searchParams?.cat || searchParams?.name ? <Pagination
        currentPage={response.currentPage || 0}
        hasPrev={response.hasPrev()}
        hasNext={response.hasNext()}
      /> : null}
    </div>
  );
};

export default ProductList;
