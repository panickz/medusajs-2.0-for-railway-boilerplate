
import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"

const StoreTemplate = ({
  centerTitle = false,
  sortBy,
  page,
  countryCode,
  hideRefinementList = false,
  title = "All Products",
}: {
  centerTitle?: boolean
  sortBy?: SortOptions
  page?: string
  countryCode: string
  hideRefinementList?: boolean
  title?: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  console.log("STORE!", sortBy, page, countryCode)

  return (
    <div
      className="flex flex-col small:flex-row small:items-start py-6 content-container"
      data-testid="category-container"
    >
      {!hideRefinementList && <RefinementList sortBy={sort} />}
      <div className="w-full">
        <div className={`${centerTitle ? 'text-center' : ''} mb-8 text-xl font-semibold lg:text-2xl-semi`}>
          <h1 data-testid="lg:store-page-title">{title}</h1>
        </div>
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sort}
            page={pageNumber}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  )
}

export default StoreTemplate
