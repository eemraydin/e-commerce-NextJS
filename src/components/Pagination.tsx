"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";


const Pagination = ({
  currentPage,
  hasPrev,
  hasNext,
}: {
  currentPage: number;
  hasPrev: boolean;
  hasNext: boolean;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();


  const currentPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="mt-1 justify-between flex w-full">
      <button
        className="rounded-md bg-main text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200"
        disabled={!hasPrev}
        onClick={() => currentPageUrl(currentPage - 1)}
      >
        Previous
      </button>
      <button
        className="rounded-md bg-main text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200"
        disabled={!hasNext}
        onClick={() => currentPageUrl(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
