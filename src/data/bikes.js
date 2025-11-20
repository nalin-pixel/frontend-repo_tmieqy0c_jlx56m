export const categories = [
  {
    slug: 'sport',
    name: 'Sport Bikes',
    description: 'Aggressive aerodynamics, razor-sharp handling, and blistering acceleration.',
    accent: 'from-rose-500 to-amber-500',
    image: 'https://images.unsplash.com/photo-1605050824853-7fb0755face3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTcG9ydCUyMEJpa2VzfGVufDB8MHx8fDE3NjM2NTM3MjN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    slug: 'cruiser',
    name: 'Cruisers',
    description: 'Low-slung comfort with muscular torque and boulevard style.',
    accent: 'from-fuchsia-500 to-violet-500',
    image: 'https://images.unsplash.com/photo-1716487042716-5ac141c939fd?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDcnVpc2Vyc3xlbnwwfDB8fHwxNzYzNjUzNzI0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    slug: 'adventure',
    name: 'Adventure',
    description: 'Long-travel suspension and go-anywhere endurance for dirt or tarmac.',
    accent: 'from-emerald-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1756142753262-30ff09fae734?ixid=M3w3OTkxMTl8MXwxfHNlYXJjaHwxfHxBZHZlbnR1cmV8ZW58MHwwfHx8MTc2MzY1MzcyNHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    slug: 'electric',
    name: 'Electric',
    description: 'Instant torque, silent speed, and zero emissions futurism.',
    accent: 'from-sky-500 to-indigo-500',
    image: 'https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFbGVjdHJpY3xlbnwwfDB8fHwxNzYzNjUzNzI1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  }
]

export const bikes = [
  {
    id: 'yzf-r1',
    name: 'Yamaha YZF-R1',
    category: 'sport',
    price: 17799,
    image: 'https://images.unsplash.com/photo-1574775332594-6ec23d0d150a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxZYW1haGElMjBZWkYtUjF8ZW58MHwwfHx8MTc2MzY1MzcyNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    specs: {
      power: '197 hp',
      weight: '200 kg',
      engine: '998cc Inline-4',
      topSpeed: '299 km/h'
    },
    blurb: 'Track-bred precision with MotoGP DNA and ferocious top-end.'
  },
  {
    id: 'panigale-v4',
    name: 'Ducati Panigale V4',
    category: 'sport',
    price: 21995,
    image: 'https://images.unsplash.com/photo-1698695290237-5c7be2bd52a8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEdWNhdGklMjBQYW5pZ2FsZSUyMFY0fGVufDB8MHx8fDE3NjM2NTM3MjZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    specs: {
      power: '214 hp',
      weight: '198 kg',
      engine: '1103cc V4',
      topSpeed: '300+ km/h'
    },
    blurb: 'Exotic performance art with a spine-tingling soundtrack.'
  },
  {
    id: 'harley-fat-bob',
    name: 'Harley-Davidson Fat Bob 114',
    category: 'cruiser',
    price: 19999,
    image: 'https://images.unsplash.com/photo-1663466135435-3b2bd6360047?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIYXJsZXktRGF2aWRzb24lMjBGYXQlMjBCb2IlMjAxMTR8ZW58MHwwfHx8MTc2MzY1MzcyNnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    specs: {
      power: '92 hp',
      weight: '306 kg',
      engine: '1868cc V-Twin',
      topSpeed: '185 km/h'
    },
    blurb: 'Street authority with Milwaukee muscle and modern attitude.'
  },
  {
    id: 'bmw-gs',
    name: 'BMW R 1250 GS Adventure',
    category: 'adventure',
    price: 20995,
    image: 'https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=1600&auto=format&fit=crop',
    specs: {
      power: '136 hp',
      weight: '268 kg',
      engine: '1254cc Boxer Twin',
      topSpeed: '200 km/h'
    },
    blurb: 'Go-anywhere tenacity with continental comfort and tech.'
  },
  {
    id: 'ktm-1290-super-adventure',
    name: 'KTM 1290 Super Adventure R',
    category: 'adventure',
    price: 19999,
    image: 'https://images.unsplash.com/photo-1685531377949-784864b8e78b?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjM2NTM3Mjd8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    specs: {
      power: '160 hp',
      weight: '240 kg',
      engine: '1301cc V-Twin',
      topSpeed: '250 km/h'
    },
    blurb: 'Desert-devouring power with rally-bred electronics.'
  },
  {
    id: 'zero-srf',
    name: 'Zero SR/F',
    category: 'electric',
    price: 19995,
    image: 'https://images.unsplash.com/photo-1649609732417-48b046cbb3a7?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjM2NTM3Mjd8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    specs: {
      power: '110 hp',
      weight: '220 kg',
      engine: 'Electric',
      topSpeed: '200 km/h'
    },
    blurb: 'Silent thunder: instant torque and premium components.'
  }
]
