import { Text } from "@medusajs/ui"
import Image from "next/image"

const MedusaCTA = () => {
  return (
    <Text className="flex gap-x-1 text-xs items-center">
     Payments With:
     <Image src="/visa.svg" width={20} height={10} alt="Visa"/> 
     <Image src="/maestro.svg" width={20} height={10} alt="Visa"/> 
     <Image src="/mastercard.svg" width={20} height={10} alt="Visa"/> 
    </Text>
  )
}

export default MedusaCTA
