import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import Image from "next/image"
import { Button } from "@medusajs/ui"
import Link from "next/link"
import ChevronRight from "@modules/common/icons/chevron-down"
import { ShoppingBag, User, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Mola Clothing - Portugal",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Mola.",
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <section className="relative h-[60vh] md:h-[60vh] overflow-hidden">
            <video
              src="/mola.mp4"
              width={1920}
              height={1080}
              className="object-cover w-full h-full"
              autoPlay
              loop
              muted
            >
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 text-white bg-gradient-to-t from-black/40 to-transparent">
              <h1 className="text-3xl md:text-5xl  font-semibold mb-4">
                Mola Clothing
              </h1>
              <p className="text-lg md:text-xl mb-6 max-w-xl">
                A touch of Portugal always with you
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
               
                <Button data-testid="go-to-shop" className="flex gap-1 items-center" variant="secondary" size="large">
                <ShoppingBag size={16} />
                Shop Now
                  
                </Button>
              </div>
            </div>
          </section>

          {/* Featured Categories */}
          <section className="py-16 px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold  text-center mb-12">
              Iconic Clothing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Category 1 */}
              <div className="group relative overflow-hidden">
                <Image
                  src="/shirt-steak.webp?height=800&width=600"
                  alt="Handbags"
                  width={600}
                  height={800}
                  className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/50 to-transparent">
                  <h3 className="text-xl text-white font-medium mb-2">
                    Double Touch Steak
                  </h3>
                  <Link
                    href="/products/double-touch-steak"
                    className="flex items-center text-white text-sm"
                  >
                    Discover <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Category 2 */}
              <div className="group relative overflow-hidden">
                <Image
                  src="/sweat-house.webp?height=800&width=600"
                  alt="Watches"
                  width={600}
                  height={800}
                  className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/50 to-transparent">
                  <h3 className="text-xl text-white font-medium mb-2">
                    It's For Sure a Portuguese House
                  </h3>
                  <Link
                    href="/products/its-definitely-a-portuguese-house"
                    className="flex items-center text-white text-sm"
                  >
                    Discover <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Category 3 */}
              <div className="group relative overflow-hidden">
                <Image
                  src="/shirt-sand.webp?height=800&width=600"
                  alt="Fragrances"
                  width={600}
                  height={800}
                  className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/50 to-transparent">
                  <h3 className="text-xl text-white font-medium mb-2">
                    Too Much Sand for your Truck
                  </h3>
                  <Link
                    href="/products/double-touch-stake-white"
                    className="flex items-center text-white text-sm"
                  >
                    Discover <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Brand Story */}
          <section className="py-16 px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                  The Art of Craftsmanship
                </h2>
                <p className="text-neutral-600 mb-6">
                  Since 2025, Mola has brought unique designs to the world,
                  combining innovation with style and uncompromising quality.
                  Today, the House remains faithful to the spirit of its
                  founder, Joe, who invented a genuine "Art of Travel" through
                  luggage, bags and accessories.
                </p>
                <Link href="/about-us">
                  <Button data-testid="go-to-cart-button" size="large">About Us</Button>
                </Link>
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src="/1.png"
                  alt="Craftsmanship"
                  width={800}
                  height={800}
                  className="w-full h-1/2 rounded-xl"
                />
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="py-16 bg-neutral-100">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl  text-center mb-12">
                Our Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 flex items-center justify-center border border-black rounded-full">
                      <ShoppingBag className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-2">
                    Complimentary Delivery
                  </h3>
                  <p className="text-neutral-600">
                    Enjoy free shipping on all orders
                  </p>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 flex items-center justify-center border border-black rounded-full">
                      <svg
                        className="h-8 w-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 10C20 14.4183 16.4183 18 12 18C7.58172 18 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M12 18V22"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M7 22H17"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Personalisation</h3>
                  <p className="text-neutral-600">
                    Make your Louis Vuitton uniquely yours
                  </p>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 flex items-center justify-center border border-black rounded-full">
                      <User className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Client Services</h3>
                  <p className="text-neutral-600">
                    Our advisors are available to help you
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Call to Action */}
          <section
            className="w-full py-12 md:py-24 lg:py-32 bg-black text-white"
            style={{
              backgroundSize: "109px",
              backgroundImage: "url(/mola-bg-2.svg)",
            }}
          >
            <div className=" px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Join Our Journey
                  </h2>
                  <p className="mx-auto max-w-[700px] md:text-xl">
                    Discover our latest collections and be part of our growing
                    community.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                 
                    <Link
                      href="/store"
                    >
                      <Button data-testid="go-to-shop" className="flex gap-1 items-center" variant="secondary" size="large">
                <ShoppingBag size={16} />
                Shop Now
                  
                </Button>
                    </Link>
                    <Link
                      className="text-xs"
                      href="mailto:geral@molaclothing.pt"
                    >
                      Contact Us
                    </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
