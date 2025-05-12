import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ChevronDown from "@modules/common/icons/chevron-down"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full bg-white relative small:min-h-screen">
      <div className="h-16 bg-white border-b ">
        <nav className="flex h-full items-center content-container justify-between">
          <LocalizedClientLink
            href="/cart"
            className="text-small-semi text-ui-fg-base flex items-center gap-x-2 uppercase flex-1 basis-0"
            data-testid="back-to-cart-link"
          >
            <ChevronDown className="rotate-90" size={16} />
            <span className="mt-px hidden small:block txt-compact-plus text-ui-fg-subtle hover:text-ui-fg-base ">
              Back to shopping cart
            </span>
            <span className="mt-px block small:hidden txt-compact-plus text-ui-fg-subtle hover:text-ui-fg-base">
              Back
            </span>
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/"
            className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            data-testid="store-link"
          >
            <svg className="w-30 h-4" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1107.000000 255.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,255.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none"><path d="M162 2298 l3 -132 32 -18 c38 -23 -33 -10 1698 -318 770 -137 1581 -281 1802 -321 463 -82 428 -84 485 22 88 167 274 279 458 279 265 -1 470 -177 527 -453 10 -48 21 -86 25 -85 9 4 832 764 965 891 111 108 119 123 108 213 l-6 54 -3050 0 -3050 0 3 -132z"></path><path d="M6625 2340 l-7 -90 -62 0 c-98 0 -147 -29 -305 -183 -75 -73 -217 -207 -316 -297 -426 -391 -758 -700 -865 -809 -126 -128 -190 -169 -301 -196 -233 -55 -457 42 -582 253 -36 60 -55 83 -78 91 -25 9 -176 -16 -922 -149 -491 -87 -1353 -240 -1917 -340 -564 -100 -1035 -183 -1047 -186 -34 -9 -66 -50 -66 -86 -1 -18 0 -75 1 -125 l2 -93 3045 0 c3000 0 3044 0 3055 19 5 11 10 38 10 60 0 97 27 111 221 111 l126 0 7 -92 c3 -50 9 -94 12 -97 3 -3 769 -7 1703 -9 1365 -2 1705 0 1736 10 64 21 67 32 62 293 -4 195 -8 242 -26 310 -62 231 -183 371 -419 487 l-123 60 76 33 c126 55 185 95 280 190 70 70 99 107 127 165 102 208 130 464 77 709 l-11 51 -1743 0 -1743 0 -7 -90z m1697 -684 c97 -19 157 -39 255 -88 145 -72 343 -238 343 -288 0 -51 -190 -210 -341 -286 -137 -68 -240 -95 -394 -101 -246 -10 -448 52 -678 210 -88 60 -237 191 -227 200 24 23 331 223 381 248 211 106 453 145 661 105z"></path><path d="M4570 1646 c-146 -32 -249 -132 -286 -276 -54 -210 87 -424 301 -458 283 -46 512 237 407 502 -67 170 -249 270 -422 232z"></path><path d="M10535 1616 c-104 -33 -187 -104 -228 -194 -31 -71 -35 -191 -8 -263 56 -147 174 -231 326 -231 102 -1 175 30 246 103 72 72 101 144 101 244 0 104 -30 175 -107 252 -52 51 -72 64 -129 82 -76 24 -142 26 -201 7z m200 -80 c94 -40 165 -147 165 -252 0 -165 -114 -285 -269 -283 -119 1 -200 50 -250 149 -82 165 5 354 184 401 39 10 128 2 170 -15z"></path><path d="M10504 1477 c-2 -7 -3 -100 -2 -207 l3 -195 40 0 40 0 3 88 3 87 28 0 c34 0 41 -14 41 -84 0 -70 20 -98 68 -94 29 2 38 8 40 24 2 15 -3 23 -17 27 -19 4 -21 13 -21 71 0 50 -4 68 -15 72 -13 5 -12 10 5 31 23 30 27 104 7 143 -7 14 -28 30 -47 37 -49 17 -169 17 -176 0z m154 -114 l3 -53 -40 0 -41 0 0 56 0 55 38 -3 37 -3 3 -52z"></path></g></svg>
            
          </LocalizedClientLink>
          <div className="flex-1 basis-0" />
        </nav>
      </div>
      <div className="relative" data-testid="checkout-container">{children}</div>
      <div className="py-4 w-full flex items-center justify-center">
        <MedusaCTA />
      </div>
    </div>
  )
}
