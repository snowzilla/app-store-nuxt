export default defineEventHandler(() => {
  return {
    category: 'Products',
    slug: 'products',
    value: [
      {
        id: 1,
        img: '_nuxt/assets/img/product/adobe.webp',
        title: 'Adobe Creative Cloud',
        price: 1020
      },
      {
        id: 2,
        img: '_nuxt/assets/img/product/apple.webp',
        title: 'Apple Gift Card',
        price: 763
      },
      {
        id: 3,
        img: '_nuxt/assets/img/product/canva.webp',
        title: 'Canva PRO',
        price: 102
      },
      {
        id: 4,
        img: '_nuxt/assets/img/product/figma.webp',
        title: 'Figma Professional',
        price: 3050
      },
      {
        id: 5,
        img: '_nuxt/assets/img/product/microsoft.webp',
        title: 'Microsoft Office 365',
        price: 600
      },
      {
        id: 6,
        img: '_nuxt/assets/img/product/notion.webp',
        title: 'Notion Plus',
        price: 350
      },
      {
        id: 7,
        img: '_nuxt/assets/img/product/spotify.webp',
        title: 'Spotify Premium',
        price: 444
      },
    ]
  }
})
