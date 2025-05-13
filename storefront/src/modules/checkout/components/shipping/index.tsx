"use client"

import { RadioGroup } from "@headlessui/react"
import { CheckCircleSolid } from "@medusajs/icons"
import { Button, Heading, Text, clx } from "@medusajs/ui"

import Divider from "@modules/common/components/divider"
import Radio from "@modules/common/components/radio"
import ErrorMessage from "@modules/checkout/components/error-message"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { setShippingMethod } from "@lib/data/cart"
import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"
import { Pencil } from "lucide-react"

type ShippingProps = {
  cart: HttpTypes.StoreCart
  availableShippingMethods: HttpTypes.StoreCartShippingOption[] | null
}

const Shipping: React.FC<ShippingProps> = ({
  cart,
  availableShippingMethods,
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const isOpen = searchParams.get("step") === "delivery"

  const selectedShippingMethod = availableShippingMethods?.find(
    // To do: remove the previously selected shipping method instead of using the last one
    (method) => method.id === cart.shipping_methods?.at(-1)?.shipping_option_id
  )

  const handleEdit = () => {
    router.push(pathname + "?step=delivery", { scroll: false })
  }

  const handleSubmit = () => {
    router.push(pathname + "?step=payment", { scroll: false })
  }

  const set = async (id: string) => {
    setIsLoading(true)
    await setShippingMethod({ cartId: cart.id, shippingMethodId: id })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    setError(null)
  }, [isOpen])

  return (
    <div className="bg-white">
      <div className="flex flex-row items-center justify-between mb-6">
        <Heading
          level="h2"
          className={clx(
            "flex flex-row text-3xl-regular gap-x-2 items-baseline",
            {
              "opacity-50 pointer-events-none select-none":
                !isOpen && cart.shipping_methods?.length === 0,
            }
          )}
        >
          Delivery
          {!isOpen && (cart.shipping_methods?.length ?? 0) > 0 && (
            <CheckCircleSolid className="text-green-600" />
          )}
        </Heading>
        {!isOpen &&
          cart?.shipping_address &&
          cart?.billing_address &&
          cart?.email && (
            <Text>
              <button
                onClick={handleEdit}
                className="text-ui-fg-interactive flex items-center gap-1 hover:text-ui-fg-interactive-hover"
                data-testid="edit-shipping-button"
              >
                <Pencil size={12} />
                Edit
              </button>
            </Text>
          )}
      </div>
      {isOpen ? (
        <div data-testid="delivery-options-container">
          <div className="pb-8">
            <RadioGroup value={selectedShippingMethod?.id} onChange={set}>
              {availableShippingMethods?.map((option) => {
                return (
                  <RadioGroup.Option
                    key={option.id}
                    value={option.id}
                    data-testid="delivery-option-radio"
                    className={clx(
                      "flex items-center justify-between text-small-regular cursor-pointer py-4 border rounded-rounded px-8 mb-2 hover:shadow-borders-interactive-with-active",
                      {
                        "border-ui-border-interactive":
                          option.id === selectedShippingMethod?.id,
                      }
                    )}
                  >
                    <div className="flex items-center gap-x-4">
                      <Radio
                        checked={option.id === selectedShippingMethod?.id}
                      />
                      <span className="text-sm flex items-center gap-2">
                        {option.name.includes("CTT") && (
                          <svg
                            className="w-6"
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1573 1004"
                          >
                            <g id="Menu-Principal/Footer">
                              <g id="Particulares_footer">
                                <g id="Group">
                                  <g id="Group-18">
                                    <path
                                      id="Fill-58"
                                      fill="#df0024"
                                      d="m629.7 966c-71.8 21.6-152.9 37-230.9 37-260.5 0-397.8-160.3-397.8-400.8 0-238.9 137.3-400.8 397.8-400.8 78 0 159.1 15.4 230.9 37l-31.2 160.3c-70.2-21.6-117-30.8-173.2-30.8-134.1 0-190.3 98.6-190.3 234.3 0 135.7 56.2 234.3 190.3 234.3 56.2 0 103-9.2 173.2-30.8z"
                                    />
                                    <path
                                      id="Fill-60"
                                      fill="#df0024"
                                      d="m967.1 383.3v390c0 52.4 35.9 67.9 70.2 67.9 15.6 0 48.4-1.6 67.1-6.2v155.7c-45.2 7.7-123.2 12.3-160.7 12.3-162.2 0-199.6-86.3-199.6-208.1v-411.6-166.5-100.5l223-115.3v215.8h137.3v166.5z"
                                    />
                                    <path
                                      id="Fill-62"
                                      fill="#df0024"
                                      d="m1435.6 383.3v390c0 52.4 35.8 67.9 70.2 67.9 15.5 0 48.3-1.6 67-6.2v155.7c-45.2 7.7-123.2 12.3-160.6 12.3-162.3 0-199.7-86.3-199.7-208.1v-678.6l223.1-115.3v215.8h137.2v166.5z"
                                    />
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        )}
                        {option.name}
                      </span>
                    </div>
                    <span className="justify-self-end text-ui-fg-base">
                      {convertToLocale({
                        amount: option.amount!,
                        currency_code: cart?.currency_code,
                      })}
                    </span>
                  </RadioGroup.Option>
                )
              })}
            </RadioGroup>
          </div>

          <ErrorMessage
            error={error}
            data-testid="delivery-option-error-message"
          />

          <Button
            size="large"
            className="mt-6 w-full lg:w-auto"
            onClick={handleSubmit}
            isLoading={isLoading}
            disabled={!cart.shipping_methods?.[0]}
            data-testid="submit-delivery-option-button"
          >
            Continue to payment
          </Button>
        </div>
      ) : (
        <div>
          <div className="text-small-regular">
            {cart && (cart.shipping_methods?.length ?? 0) > 0 && (
              <div className="flex flex-col w-1/3">
                <Text className="txt-medium-plus text-ui-fg-base font-semibold mb-1">
                  Method
                </Text>
                <Text className="txt-medium text-ui-fg-subtle">
                  {selectedShippingMethod?.name}{" "}
                  {convertToLocale({
                    amount: selectedShippingMethod?.amount!,
                    currency_code: cart?.currency_code,
                  })}
                </Text>
              </div>
            )}
          </div>
        </div>
      )}
      <Divider className="mt-8" />
    </div>
  )
}

export default Shipping
