import { getCategoriesList } from "@lib/data/categories"
import { getCollectionsList } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="border-t border-ui-border-base w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-20">
          <div className="flex flex-col gap-y-6">
            <LocalizedClientLink
              href="/"
              className="uppercase"
            >
              <svg className="w-30 h-4" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1107.000000 255.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,255.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none"><path d="M162 2298 l3 -132 32 -18 c38 -23 -33 -10 1698 -318 770 -137 1581 -281 1802 -321 463 -82 428 -84 485 22 88 167 274 279 458 279 265 -1 470 -177 527 -453 10 -48 21 -86 25 -85 9 4 832 764 965 891 111 108 119 123 108 213 l-6 54 -3050 0 -3050 0 3 -132z"></path><path d="M6625 2340 l-7 -90 -62 0 c-98 0 -147 -29 -305 -183 -75 -73 -217 -207 -316 -297 -426 -391 -758 -700 -865 -809 -126 -128 -190 -169 -301 -196 -233 -55 -457 42 -582 253 -36 60 -55 83 -78 91 -25 9 -176 -16 -922 -149 -491 -87 -1353 -240 -1917 -340 -564 -100 -1035 -183 -1047 -186 -34 -9 -66 -50 -66 -86 -1 -18 0 -75 1 -125 l2 -93 3045 0 c3000 0 3044 0 3055 19 5 11 10 38 10 60 0 97 27 111 221 111 l126 0 7 -92 c3 -50 9 -94 12 -97 3 -3 769 -7 1703 -9 1365 -2 1705 0 1736 10 64 21 67 32 62 293 -4 195 -8 242 -26 310 -62 231 -183 371 -419 487 l-123 60 76 33 c126 55 185 95 280 190 70 70 99 107 127 165 102 208 130 464 77 709 l-11 51 -1743 0 -1743 0 -7 -90z m1697 -684 c97 -19 157 -39 255 -88 145 -72 343 -238 343 -288 0 -51 -190 -210 -341 -286 -137 -68 -240 -95 -394 -101 -246 -10 -448 52 -678 210 -88 60 -237 191 -227 200 24 23 331 223 381 248 211 106 453 145 661 105z"></path><path d="M4570 1646 c-146 -32 -249 -132 -286 -276 -54 -210 87 -424 301 -458 283 -46 512 237 407 502 -67 170 -249 270 -422 232z"></path><path d="M10535 1616 c-104 -33 -187 -104 -228 -194 -31 -71 -35 -191 -8 -263 56 -147 174 -231 326 -231 102 -1 175 30 246 103 72 72 101 144 101 244 0 104 -30 175 -107 252 -52 51 -72 64 -129 82 -76 24 -142 26 -201 7z m200 -80 c94 -40 165 -147 165 -252 0 -165 -114 -285 -269 -283 -119 1 -200 50 -250 149 -82 165 5 354 184 401 39 10 128 2 170 -15z"></path><path d="M10504 1477 c-2 -7 -3 -100 -2 -207 l3 -195 40 0 40 0 3 88 3 87 28 0 c34 0 41 -14 41 -84 0 -70 20 -98 68 -94 29 2 38 8 40 24 2 15 -3 23 -17 27 -19 4 -21 13 -21 71 0 50 -4 68 -15 72 -13 5 -12 10 5 31 23 30 27 104 7 143 -7 14 -28 30 -47 37 -49 17 -169 17 -176 0z m154 -114 l3 -53 -40 0 -41 0 0 56 0 55 38 -3 37 -3 3 -52z"></path></g></svg>
            
            </LocalizedClientLink>
            <p className="max-w-[350px] text-xs opacity-60">
            Mola is proud to call Portugal home, and our collections reflect the spirit and artistry of our heritage. We are committed to bringing you high-quality clothing with a distinct Portuguese touch, while embracing global trends and styles. Explore the world of Mola and experience fashion with passion, from our base in Portugal.
            </p>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {product_categories && product_categories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Categories
                </span>
                <ul
                  className="grid grid-cols-1 space-y-0 gap-2"
                  data-testid="footer-categories"
                >
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-0 font-normal txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-ui-fg-base",
                            children && ""
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-ui-fg-base"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Collections
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">Mola</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <a
                    href="/privacy-policy"
               
                    className="hover:text-ui-fg-base"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-conditions"
               
                    className="hover:text-ui-fg-base"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/shipping-policy"
               
                    className="hover:text-ui-fg-base"
                  >
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/refund-policy"
               
                    className="hover:text-ui-fg-base"
                  >
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">Mola</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
              <li>
                  <a
                    href="/about-us"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:geral@molaclothing.pt"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/sitemap.xml"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Mola Store. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}
