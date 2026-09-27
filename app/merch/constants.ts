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
  // These 5 listings are separate Printful products (own link each), one per sticker design.
  {
    name: 'Die-Cut Stickers \u2014 Vape Vault Wordmark',
    category: 'Stickers',
    price: '$5.00',
    url: 'https://forgewell.printful.me/product/die-cut-stickers',
    image: 'https://cdn.printful.me/t/quick-stores/products/w339/18818332-957-6ab9313b4b166__360',
  },
  {
    name: 'Die-Cut Stickers \u2014 VW Monogram',
    category: 'Stickers',
    price: '$5.00',
    url: 'https://forgewell.printful.me/product/die-cut-stickers-6ab937077d556',
    image: 'https://cdn.printful.me/t/quick-stores/products/w339/18818332-957-6ab937072b3a0__360',
  },
  {
    name: 'Die-Cut Stickers \u2014 Vape Vault Script',
    category: 'Stickers',
    price: '$5.00',
    url: 'https://forgewell.printful.me/product/die-cut-stickers-6ab93611361cc',
    image: 'https://cdn.printful.me/t/quick-stores/products/w339/18818332-957-6ab93610f1d78__360',
  },
  {
    name: 'Die-Cut Stickers \u2014 Boxed Logo',
    category: 'Stickers',
    price: '$5.50',
    url: 'https://forgewell.printful.me/product/die-cut-stickers-6ab934564c2c0',
    image: 'https://cdn.printful.me/t/quick-stores/products/w339/18818332-957-6ab93456117cf__360',
  },
  {
    name: 'Die-Cut Stickers \u2014 Circular Badge',
    category: 'Stickers',
    price: '$5.00',
    url: 'https://forgewell.printful.me/product/die-cut-stickers-6ab93380b01e0',
    image: 'https://cdn.printful.me/t/quick-stores/products/w339/18818332-957-6ab933806456a__360',
  },
]
