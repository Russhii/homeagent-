const workers = [
  {
    id: 1,
    name: 'Ramesh Patil',
    service: 'Plumber',
    price: 300,
    rating: 4.8,
    area: 'Pimpri, Pune',
    phone: '9876543210',
    experience: '8 years',
    about: 'Expert in all kinds of plumbing work including pipe fitting, leak repairs, bathroom fittings and water tank installation.',
    reviews: [
      { user: 'Amit S.', comment: 'Very professional and quick!', rating: 5 },
      { user: 'Priya M.', comment: 'Fixed my leak in 30 mins. Excellent!', rating: 5 },
      { user: 'Rahul K.', comment: 'Good work, reasonable price.', rating: 4 },
    ]
  },
  {
    id: 2,
    name: 'Suresh Kumar',
    service: 'Electrician',
    price: 350,
    rating: 4.6,
    area: 'Chinchwad, Pune',
    phone: '9876543211',
    experience: '6 years',
    about: 'Specialized in home wiring, switch installations, inverter setup and electrical fault detection.',
    reviews: [
      { user: 'Sneha R.', comment: 'Very knowledgeable and safe worker!', rating: 5 },
      { user: 'Vijay P.', comment: 'Did great job with wiring.', rating: 4 },
      { user: 'Meena T.', comment: 'Punctual and professional.', rating: 5 },
    ]
  },
  {
    id: 3,
    name: 'Mahesh Jadhav',
    service: 'Carpenter',
    price: 400,
    rating: 4.9,
    area: 'Akurdi, Pune',
    phone: '9876543212',
    experience: '12 years',
    about: 'Expert carpenter for furniture making, door/window repairs, modular kitchen and custom woodwork.',
    reviews: [
      { user: 'Kavita B.', comment: 'Made beautiful furniture for my home!', rating: 5 },
      { user: 'Sanjay L.', comment: 'Best carpenter in Pune!', rating: 5 },
      { user: 'Anita D.', comment: 'Very skilled and creative.', rating: 5 },
    ]
  },
  {
    id: 4,
    name: 'Ganesh Shinde',
    service: 'Painter',
    price: 250,
    rating: 4.5,
    area: 'Nigdi, Pune',
    phone: '9876543213',
    experience: '5 years',
    about: 'Professional painter for interior and exterior walls, texture painting, waterproofing and wood polishing.',
    reviews: [
      { user: 'Rohit A.', comment: 'Painted my entire flat perfectly!', rating: 5 },
      { user: 'Sunita G.', comment: 'Clean work, no mess left behind.', rating: 4 },
      { user: 'Deepak N.', comment: 'Good quality paint work.', rating: 4 },
    ]
  },
]

export default workers