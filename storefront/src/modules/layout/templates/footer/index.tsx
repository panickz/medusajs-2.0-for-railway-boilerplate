import { getCategoriesList } from "@lib/data/categories"
import { getCollectionsList } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import Link from "next/link"

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
              <svg className="w-30 h-4 hover:rotate-12 duration-200" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1107.000000 255.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,255.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none"><path d="M162 2298 l3 -132 32 -18 c38 -23 -33 -10 1698 -318 770 -137 1581 -281 1802 -321 463 -82 428 -84 485 22 88 167 274 279 458 279 265 -1 470 -177 527 -453 10 -48 21 -86 25 -85 9 4 832 764 965 891 111 108 119 123 108 213 l-6 54 -3050 0 -3050 0 3 -132z"></path><path d="M6625 2340 l-7 -90 -62 0 c-98 0 -147 -29 -305 -183 -75 -73 -217 -207 -316 -297 -426 -391 -758 -700 -865 -809 -126 -128 -190 -169 -301 -196 -233 -55 -457 42 -582 253 -36 60 -55 83 -78 91 -25 9 -176 -16 -922 -149 -491 -87 -1353 -240 -1917 -340 -564 -100 -1035 -183 -1047 -186 -34 -9 -66 -50 -66 -86 -1 -18 0 -75 1 -125 l2 -93 3045 0 c3000 0 3044 0 3055 19 5 11 10 38 10 60 0 97 27 111 221 111 l126 0 7 -92 c3 -50 9 -94 12 -97 3 -3 769 -7 1703 -9 1365 -2 1705 0 1736 10 64 21 67 32 62 293 -4 195 -8 242 -26 310 -62 231 -183 371 -419 487 l-123 60 76 33 c126 55 185 95 280 190 70 70 99 107 127 165 102 208 130 464 77 709 l-11 51 -1743 0 -1743 0 -7 -90z m1697 -684 c97 -19 157 -39 255 -88 145 -72 343 -238 343 -288 0 -51 -190 -210 -341 -286 -137 -68 -240 -95 -394 -101 -246 -10 -448 52 -678 210 -88 60 -237 191 -227 200 24 23 331 223 381 248 211 106 453 145 661 105z"></path><path d="M4570 1646 c-146 -32 -249 -132 -286 -276 -54 -210 87 -424 301 -458 283 -46 512 237 407 502 -67 170 -249 270 -422 232z"></path><path d="M10535 1616 c-104 -33 -187 -104 -228 -194 -31 -71 -35 -191 -8 -263 56 -147 174 -231 326 -231 102 -1 175 30 246 103 72 72 101 144 101 244 0 104 -30 175 -107 252 -52 51 -72 64 -129 82 -76 24 -142 26 -201 7z m200 -80 c94 -40 165 -147 165 -252 0 -165 -114 -285 -269 -283 -119 1 -200 50 -250 149 -82 165 5 354 184 401 39 10 128 2 170 -15z"></path><path d="M10504 1477 c-2 -7 -3 -100 -2 -207 l3 -195 40 0 40 0 3 88 3 87 28 0 c34 0 41 -14 41 -84 0 -70 20 -98 68 -94 29 2 38 8 40 24 2 15 -3 23 -17 27 -19 4 -21 13 -21 71 0 50 -4 68 -15 72 -13 5 -12 10 5 31 23 30 27 104 7 143 -7 14 -28 30 -47 37 -49 17 -169 17 -176 0z m154 -114 l3 -53 -40 0 -41 0 0 56 0 55 38 -3 37 -3 3 -52z"></path></g></svg>
            
            </LocalizedClientLink>
            <p className="max-w-[350px] text-xs opacity-60">
            Mola is proud to call Portugal home, and our collections reflect the spirit and artistry of our heritage. We are committed to bringing you high-quality clothing with a distinct Portuguese touch, while embracing global trends and styles. Explore the world of Mola and experience fashion with passion, from our base in Portugal.
            </p>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 lg:grid-cols-4 justify-end">
            {product_categories && product_categories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base font-semibold">
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
              <span className="txt-small-plus txt-ui-fg-base font-semibold">Legal</span>
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
              <span className="txt-small-plus txt-ui-fg-base font-semibold">Mola</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
              <li>
                  <a
                    href="/about-us"
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
        <div className="flex flex-col lg:flex-row justify-center items-center gap-y-1.5 w-full mb-3 lg:justify-between text-ui-fg-muted">
          <Text className="txt-compact-small text-xs">
            © {new Date().getFullYear()} Mola Store. All rights reserved.
          </Text>
          <div className="flex text-xs gap-2 items-center">
            Website Created By
            <Link href="https://theintentmedia.com/" className="flex gap-1 items-center" target="_BLANK">
        <svg className="w-2" viewBox="0 0 162 316" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.1895 151.765C31.6247 154.176 28.9275 155.82 28.9885 158.489C29.0209 159.984 30.112 160.707 33.2217 165.104C34.5943 167.047 35.9993 168.861 37.4121 170.557C37.4121 170.557 37.4264 170.557 37.4264 170.571C47.3691 194.643 57.1406 200.791 64.4083 201.757C67.2819 202.14 71.0961 201.889 75.0763 201.637C82.9589 201.143 91.4928 200.645 94.6673 205.064C94.7465 205.175 96.4421 206.919 96.2202 206.677C92.5267 202.651 90.307 195.117 92.8926 190.171C93.5698 188.891 94.7075 187.864 96.1813 187.009C101.691 183.837 111.717 183.304 117.473 181.572C122.055 180.184 126.586 178.597 131.063 176.851H131.076C131.455 177.437 131.833 178.024 132.185 178.624C132.355 178.917 132.538 179.211 132.706 179.504C135.252 183.931 137.172 188.611 138.282 193.557C138.294 193.572 138.282 193.584 138.282 193.584C138.349 193.824 142.365 189.823 145.898 185.957C144.765 184.389 144.294 182.135 144.838 179.379C146.321 171.868 150.345 164.267 154.686 157.715C149.177 154.024 142.87 151.747 136.218 150.385C135.828 150.304 135.436 150.224 135.043 150.157C134.808 150.117 134.575 150.064 134.338 150.024C125.907 148.491 117.016 148.291 108.558 148.317C106.73 148.331 104.889 148.291 103.061 148.224C102.187 148.197 101.298 148.157 100.425 148.105H100.385C89.0784 147.795 75.8871 146.473 61.4582 143.144C54.773 141.601 48.5666 139.8 42.8674 137.881C40.3052 145.044 36.8724 149.245 34.1895 151.765Z" fill="url(#paint0_linear_2_128)"/>
        <path d="M127.041 170.704C120.829 173.891 114.523 176.984 108.139 179.984C104.46 181.704 99.7062 183.584 94.6946 185.571C91.4045 186.864 87.9977 188.211 84.7064 189.584C81.6265 190.864 78.6374 192.171 75.9481 193.491C70.3475 196.224 65.9625 199.009 64.4083 201.757C60.9094 207.931 67.0977 213.957 75.1126 215.797C75.1385 215.784 75.1645 215.797 75.2436 215.797C82.763 216.944 91.3254 215.811 100.373 213.077C101.155 212.841 103.589 210.805 104.767 211.648C106.5 212.887 103.393 218.509 104.611 219.704C106.28 221.344 116.05 214.628 137.368 195.877C138.361 194.641 139.476 193.347 140.717 192.027C141.963 190.704 143.188 189.513 144.359 188.448C144.971 187.737 145.554 187 146.143 186.268C144.835 184.695 144.257 182.324 144.838 179.379C145.084 178.128 145.407 176.877 145.786 175.627C143.778 173.991 141.527 172.48 139.013 171.104C138.582 170.877 138.137 170.637 137.68 170.411C137.172 170.144 136.65 169.877 136.113 169.624C135.71 169.437 135.292 169.251 134.9 169.064C134.078 168.677 133.205 168.331 132.342 167.971C130.58 168.891 128.817 169.797 127.041 170.704Z" fill="url(#paint1_linear_2_128)"/>
        <path d="M56.6645 0.157295C52.0071 2.4373 46.9864 5.26394 41.9126 8.54528C20.5857 22.3439 -1.40411 44.3039 0.918118 68.2906C4.20037 102.077 48.8676 122.864 75.8002 135.731C97.2438 145.984 121.375 159.251 132.559 181.184C132.661 181.369 138.941 194.731 137.216 195.997C144.481 191.584 151.513 181.105 155.792 171.877C155.792 171.864 155.792 171.852 155.807 171.852C157.428 168.344 158.648 165.024 159.348 162.277C160.607 157.369 161.425 152.744 161.748 148.344C161.787 147.904 161.813 147.464 161.826 147.036C162.825 129.184 155.689 115.291 138.215 103.197C123.607 93.0773 106.598 87.064 91.0179 78.5973C89.98 78.036 88.9422 77.4506 87.9173 76.864C87.061 76.3693 86.2048 75.8773 85.3356 75.3706C83.5972 74.3573 81.8587 73.3173 80.1203 72.2373C78.823 71.4373 77.5257 70.5973 76.2543 69.7306C66.4853 63.1173 57.7413 54.944 54.7964 43.4506C53.8104 39.6106 53.4471 35.8906 53.4471 32.2373C53.4471 30.9973 53.499 29.7706 53.5769 28.5439C54.1477 19.0506 56.6775 9.8906 56.6775 0.1706V0.157295H56.6645Z" fill="url(#paint2_linear_2_128)"/>
        <mask id="mask0_2_128" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="23" y="0" width="139" height="194">
        <path d="M41.9125 8.5453C39.6824 10.3693 37.9051 11.944 37.2564 12.584C27.865 21.852 22.8301 34.2773 23.5436 47.3707C25.0615 75.704 49.8405 92.2373 73.6206 102.704C97.751 113.331 120.857 124.091 132.377 149.277C134.257 153.397 144.676 187.131 139.85 193.384C145.584 187.637 151.797 179.811 155.792 171.877C155.792 171.864 155.792 171.852 155.807 171.852C157.414 168.637 158.66 165.424 159.361 162.317C160.725 157.304 161.502 152.665 161.748 148.344C161.787 147.904 161.813 147.464 161.826 147.036C163.266 108.664 123.244 96.3706 91.0179 78.5973C89.98 78.036 88.9422 77.4507 87.9173 76.864C87.061 76.3693 86.2048 75.8773 85.3356 75.3707C83.6101 74.3707 81.8717 73.3307 80.1203 72.2373C78.823 71.4373 77.5256 70.5973 76.2543 69.7306C67.2767 63.704 58.9997 56.2773 55.6137 46.3693C53.9661 41.5307 53.4082 36.852 53.4471 32.2373C53.4471 30.9973 53.499 29.7706 53.5769 28.544C54.2126 19.144 56.7424 9.94396 56.7424 0.250625C56.7424 0.250625 56.7034 0.197295 56.6775 0.170628C56.6645 0.170628 56.6645 0.157323 56.6645 0.157323C52.0071 2.43732 46.9864 5.26397 41.9125 8.5453Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_2_128)">
        <mask id="mask1_2_128" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="-42755" y="-43128" width="85022" height="87381">
        <path d="M-42754 -43127.7H42266.7V44252.3H-42754V-43127.7Z" fill="url(#paint3_linear_2_128)"/>
        </mask>
        <g mask="url(#mask1_2_128)">
        <path d="M41.9123 8.54414C39.6821 10.3681 37.9048 11.9428 37.2561 12.5828C27.8647 21.8508 22.8298 34.2762 23.5433 47.3695C25.0612 75.7028 49.8403 92.2362 73.6204 102.703C97.7508 113.33 120.856 124.089 132.377 149.276C134.256 153.396 144.675 187.129 139.849 193.383C145.583 187.636 151.796 179.809 155.792 171.876C155.792 171.863 155.792 171.851 155.806 171.851C157.414 168.636 158.659 165.423 159.361 162.316C160.725 157.303 161.502 152.664 161.748 148.343C161.787 147.903 161.813 147.463 161.826 147.035C163.266 108.663 123.243 96.3695 91.0176 78.5961C89.9798 78.0348 88.9419 77.4495 87.917 76.8628C87.0608 76.3682 86.2045 75.8762 85.3353 75.3695C83.6099 74.3695 81.8714 73.3295 80.12 72.2362C78.8227 71.4362 77.5254 70.5962 76.254 69.7295C67.2764 63.7028 58.9994 56.2762 55.6134 46.3682C53.9658 41.5295 53.4079 36.8508 53.4469 32.2362C53.4469 30.9962 53.4987 29.7695 53.5766 28.5428C54.2123 19.1428 56.7421 9.9428 56.7421 0.249465C56.7421 0.249465 56.7032 0.196135 56.6772 0.169469C56.6642 0.169469 56.6642 0.156163 56.6642 0.156163C52.0068 2.43616 46.9861 5.26281 41.9123 8.54414Z" fill="url(#paint4_linear_2_128)"/>
        </g>
        </g>
        <path d="M7.60717 171.321C6.09707 175.085 2.98736 182.839 3.65549 192.011C5.96863 223.792 52.7012 228.547 71.2855 270.183C82.6112 295.557 81.249 315.957 81.249 315.957C81.249 315.957 116.444 303.397 128.705 281.689C129.132 280.944 129.536 280.171 129.926 279.397C129.926 279.397 131.588 276.103 132.832 272.677C141.949 247.541 131.2 229.407 131.2 229.407C128.746 225.264 126.073 222.585 123.502 220.007C116.542 213.027 109.319 209.103 104.379 206.917C104.366 206.904 104.343 206.891 104.329 206.877C99.3079 203.971 93.2869 200.131 85.9324 194.731C85.7248 194.584 85.5678 194.477 85.464 194.397C70.0271 183.024 38.9689 159.637 42.8337 137.891C36.8802 140.284 16.4083 149.375 7.60717 171.321Z" fill="url(#paint5_linear_2_128)"/>
        <path d="M44.9496 213.797C81.4306 235.077 105.78 241.531 81.249 315.957C81.249 315.957 116.444 303.397 128.705 281.689C129.132 280.944 129.536 280.171 129.926 279.397C129.926 279.397 131.595 276.092 132.832 272.677C141.486 248.791 131.2 229.407 131.2 229.407C122.995 213.941 87.9951 196.116 85.9324 194.731C85.7248 194.584 85.5678 194.477 85.4641 194.397C70.0271 183.024 38.9689 159.637 42.8337 137.891C42.2382 138.837 8.79295 192.704 44.9496 213.797Z" fill="url(#paint6_linear_2_128)"/>
        <defs>
        <linearGradient id="paint0_linear_2_128" x1="22.8285" y1="172.29" x2="161.442" y2="172.29" gradientUnits="userSpaceOnUse">
        <stop stop-color="#4000B2"/>
        <stop offset="0.0475" stop-color="#4000B2"/>
        <stop offset="0.20087" stop-color="#4000B2"/>
        <stop offset="0.995" stop-color="#970061"/>
        <stop offset="1" stop-color="#970061"/>
        </linearGradient>
        <linearGradient id="paint1_linear_2_128" x1="63.1323" y1="195.608" x2="199.379" y2="191.783" gradientUnits="userSpaceOnUse">
        <stop stop-color="#970061"/>
        <stop offset="0.005" stop-color="#970061"/>
        <stop offset="0.79913" stop-color="#4000B2"/>
        <stop offset="0.9525" stop-color="#4000B2"/>
        <stop offset="1" stop-color="#4000B2"/>
        </linearGradient>
        <linearGradient id="paint2_linear_2_128" x1="0.748842" y1="98.0773" x2="161.918" y2="98.0773" gradientUnits="userSpaceOnUse">
        <stop stop-color="#BD0079"/>
        <stop offset="0.005" stop-color="#BD0079"/>
        <stop offset="0.79913" stop-color="#846FDE"/>
        <stop offset="0.9525" stop-color="#846FDE"/>
        <stop offset="1" stop-color="#846FDE"/>
        </linearGradient>
        <linearGradient id="paint3_linear_2_128" x1="23.48" y1="96.764" x2="161.867" y2="96.764" gradientUnits="userSpaceOnUse">
        <stop stop-color="white" stop-opacity="0.4"/>
        <stop offset="1" stop-color="white" stop-opacity="0.2"/>
        </linearGradient>
        <linearGradient id="paint4_linear_2_128" x1="23.4765" y1="96.7694" x2="161.864" y2="96.7694" gradientUnits="userSpaceOnUse">
        <stop stop-color="#DB0093"/>
        <stop offset="1" stop-color="#554B9B"/>
        </linearGradient>
        <linearGradient id="paint5_linear_2_128" x1="-1.58399" y1="214.94" x2="139.58" y2="240.112" gradientUnits="userSpaceOnUse">
        <stop stop-color="#BD0079"/>
        <stop offset="0.005" stop-color="#BD0079"/>
        <stop offset="0.79913" stop-color="#FF6F00"/>
        <stop offset="0.9525" stop-color="#FF6F00"/>
        <stop offset="1" stop-color="#FF6F00"/>
        </linearGradient>
        <linearGradient id="paint6_linear_2_128" x1="28.1712" y1="226.924" x2="136.296" y2="226.924" gradientUnits="userSpaceOnUse">
        <stop stop-color="#BD0079"/>
        <stop offset="0.005" stop-color="#BD0079"/>
        <stop offset="0.79913" stop-color="#FF6F00"/>
        <stop offset="0.9525" stop-color="#FF6F00"/>
        <stop offset="1" stop-color="#FF6F00"/>
        </linearGradient>
        </defs>
        </svg>
The Intent Media.
</Link>
          </div>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}
