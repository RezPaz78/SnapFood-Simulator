import { createContext, useContext } from "react";


export const vendorsContext = createContext(null);
export const useVendorsContext = () => {
  const context =useContext(vendorsContext)
  if (context === null) {
    throw new Error('useVendorsContext should be in a child component of <VendorsProvider/>')
  }
  return context
}
