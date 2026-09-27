// The Printful Quick Store handles all products, checkout, payment, and fulfillment.
// This is the single source of truth for the storefront link so it can be swapped
// for a direct Printful API integration later without touching the rest of the page.
export const PRINTFUL_STORE_URL = 'https://forgewell.printful.me/'

export type MerchProduct = {
  name: string
  category: string
  price: string
  url: string
  image?: string
}

// Each product links straight to its own page on the Printful store so a click
// takes the customer directly to that single item, not just the storefront.
export const PRINTFUL_PRODUCTS: MerchProduct[] = [
  {
    name: 'Vape Vault Vending Hoodie',
    category: 'Hoodies',
    price: 'From $38.00',
    url: 'https://forgewell.printful.me/product/vape-vault-vending-hoodie',
    image: 'https://cdn.printful.me/t/quick-stores/variants/w339/183672636ab92df7c2e51__825',
  },
  {
    name: 'Denim T-Shirt',
    category: 'T-Shirts',
    price: 'From $32.00',
    url: 'https://forgewell.printful.me/product/denim-t-shirt',
    image: 'https://cdn.printful.me/t/quick-stores/variants/w339/183670036ab9293353c4b__825',
  },
  {
    name: 'Women\u2019s Garment Dye Cropped Tee',
    category: 'T-Shirts',
    price: 'From $21.50',
    url: 'https://forgewell.printful.me/product/womens-garment-dye-cropped-tee',
    image: 'https://cdn.printful.me/t/quick-stores/variants/w339/183671186ab92c6d4cdf6__825',
  },
  {
    name: 'Golf Rope Cap',
    category: 'Hats',
    price: 'From $18.00',
    url: 'https://forgewell.printful.me/product/golf-rope-cap',
    image: 'https://cdn.printful.me/t/quick-stores/variants/w339/183671006ab92b6b61523__825',
  },
  // These 5 listings are separate Printful products (own link each), but Printful
  // has not generated a mockup image for any of them yet — the "image" field stays
  // empty and the card falls back to the sticker icon until Printful renders one.
  {
    name: 'Die-Cut Stickers \u2014 Design 1',
    category: 'Stickers',
    price: '$5.00',
    url: 'https://forgewell.printful.me/product/die-cut-stickers',
  },
  {
    name: 'Die-Cut Stickers \u2014 Design 2',
    category: 'Stickers',
    price: '$5.00',
    url: 'https://forgewell.printful.me/product/die-cut-stickers-6ab937077d556',
  },
  {
    name: 'Die-Cut Stickers \u2014 Design 3',
    category: 'Stickers',
    price: '$5.00',
    url: 'https://forgewell.printful.me/product/die-cut-stickers-6ab93611361cc',
  },
  {
    name: 'Die-Cut Stickers \u2014 Design 4',
    category: 'Stickers',
    price: '$5.50',
    url: 'https://forgewell.printful.me/product/die-cut-stickers-6ab934564c2c0',
  },
  {
    name: 'Die-Cut Stickers \u2014 Design 5',
    category: 'Stickers',
    price: '$5.00',
    url: 'https://forgewell.printful.me/product/die-cut-stickers-6ab93380b01e0',
  },
]
