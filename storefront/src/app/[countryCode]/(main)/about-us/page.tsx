import { Metadata } from "next"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Package,
  ShoppingBag,
  Truck,
  Heart,
  ShieldCheck,
} from "lucide-react"

import { Button, Badge } from "@medusajs/ui"

export const metadata: Metadata = {
  title: "About Us - Mola Clothing",
  description: "Explore all of our products.",
}

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[35vh] md:h-[35vh] overflow-hidden">
        <video
          src="/about.mp4"
          width={1920}
          height={1080}
          playsInline
          className="object-cover w-full h-full pointer-events-none"
          autoPlay
          loop
          muted
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex items-center justify-center   text-white bg-gradient-to-t from-black/40 to-transparent">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-semibold mb-4">
              About Mola
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-xl">
              A touch of Portugal
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full max-w-[1300px] mx-auto py-12 md:py-24 lg:py-32">
        <div className=" px-4 md:px-6">
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <Badge size="small" >
                Our Journey
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Our Story
              </h2>
              <p className="text-muted-foreground md:text-base">
                Mola began in 2015 when our founders, Emma and James, recognized
                a gap in the market for affordable, high-quality fashion that
                didn't compromise on ethical standards.
              </p>
              <p className="text-muted-foreground md:text-base">
                What started as a small online boutique has grown into a global
                brand with a community of over 2 million fashion enthusiasts.
                Our journey has been defined by our commitment to quality,
                sustainability, and customer satisfaction.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/3.png?height=800&width=1200"
                alt="Mola founders in their first warehouse"
                fill
                className="object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black/5">
        <div className="container px-4 max-w-[1300px] mx-auto md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Our Values
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                The principles that guide everything we do.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-white rounded-md shadow-md">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <Heart className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Customer First</h3>
                <p className="text-muted-foreground">
                  We prioritize our customers' needs and feedback in everything
                  we create.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <ShieldCheck className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  We never compromise on the quality of our products or
                  services.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <Truck className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Reliable Service</h3>
                <p className="text-muted-foreground">
                  Fast shipping, easy returns, and responsive customer support.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <Package className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Sustainable Practices</h3>
                <p className="text-muted-foreground">
                  Eco-friendly packaging and ethically sourced materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container max-w-[1300px] mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Meet Our Team
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                The passionate individuals behind Mola.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40  rounded-full">
                <Image
                  src="/3.jpg?height=160&width=160"
                  alt="Emma Johnson"
                  fill
                  className="object-cover rounded-full shadow-md"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Emma Johnson</h3>
                <p className="text-muted-foreground">Co-Founder & CEO</p>
                <svg
                  className="w-4 mx-auto pt-1"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 382 382"
                >
                  <path
                    style={{ fill: "#0077B7" }}
                    d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
	C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
	H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
	c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
	s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
	c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
	c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
	c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
	L341.91,330.654L341.91,330.654z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40  rounded-full">
                <Image
                  src="/4.jpg?height=160&width=160"
                  alt="James Wilson"
                  fill
                  className="object-cover rounded-full shadow-md"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">James Wilson</h3>
                <p className="text-muted-foreground">Co-Founder & COO</p>
                <svg
                  className="w-4 mx-auto pt-1"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 382 382"
                >
                  <path
                    style={{ fill: "#0077B7" }}
                    d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
	C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
	H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
	c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
	s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
	c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
	c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
	c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
	L341.91,330.654L341.91,330.654z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 rounded-full">
                <Image
                  src="/2.jpg?height=160&width=160"
                  alt="Sarah Chen"
                  fill
                  className="object-cover rounded-full shadow-md"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Sarah Chen</h3>
                <p className="text-muted-foreground">Creative Director</p>
                <svg
                  className="w-4 mx-auto pt-1"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 382 382"
                >
                  <path
                    style={{ fill: "#0077B7" }}
                    d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
	C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
	H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
	c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
	s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
	c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
	c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
	c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
	L341.91,330.654L341.91,330.654z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 shadow-md rounded-full">
                <Image
                  src="/1.jpg?height=160&width=160"
                  alt="Michael Rodriguez"
                  fill
                  className="object-cover rounded-full shadow-md"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Michael Rodriguez</h3>
                <p className="text-muted-foreground">Head of Technology</p>
                <svg
                  className="w-4 mx-auto pt-1"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 382 382"
                >
                  <path
                    style={{ fill: "#0077B7" }}
                    d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
	C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
	H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
	c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
	s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
	c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
	c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
	c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
	L341.91,330.654L341.91,330.654z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-black/95 text-white"
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
    </div>
  )
}
