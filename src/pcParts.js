const pcComponents = {
  processors: [
    {
      type: 'intel i9',
      name: 'Intel Core i9 10900K Processor',
      image: '/images/intel-i9.jpg',
      socket: 'LGA 1200',
      frequency: 3.7,
      core: 10,
      nanometers: 45,
      condition: 'ახალი',
      left: 1,
      price: 2150,
    },
    {
      type: 'i7',
      name: 'Intel Core i7 11700K Processor',
      image: '/images/intel-i7.jpg',
      socket: 'LGA 1200',
      frequency: 3.6,
      core: 8,
      nanometers: 14,
      condition: 'ახალი',
      left: 1,
      price: 1650,
    },
    {
      type: 'i5',
      name: 'Intel Core i5 11600K Processor',
      image: '/images/intel-i5.jpg',
      socket: 'LGA 1200',
      frequency: 3.9,
      core: 6,
      nanometers: 45,
      condition: 'ახალი',
      left: 1,
      price: 1100,
    },
    {
      type: 'i3',
      name: 'Intel Core i3 10100F Processor',
      image: '/images/intel-i3.jpg',
      socket: 'LGA 1200',
      frequency: 3.6,
      core: 4,
      nanometers: 14,
      condition: 'ახალი',
      left: 5,
      price: 480,
    },
  ],
  motherboard: [
    {
      type: 'gigabyte',
      name: 'Gigabyte Z490 Vision G (rev. 1.x)',
      image: '/images/Gigabyte-Z490-v-1.png',
      chipset: 'Intel Z490',
      memoryType: 'DDR4',
      maxMemory: 128,
      slotNumber: 4,
      formFactore: 'ATX',
      condition: 'ახალი',
      price: 900,
    },
    {
      type: 'msi',
      name: 'MSI MPG Z490 Gaming Plus',
      image: '/images/MSI-MPG-Z490-Gaming-Plus.jpg',
      chipset: 'Intel Z490',
      memoryType: 'DDR4',
      maxMemory: 128,
      slotNumber: 4,
      formFactore: 'ATX',
      condition: 'ახალი',
      price: 800,
    },
    {
      type: 'gigabyte',
      name: 'Gigabyte Z490 UD (rev. 1.0)',
      image: '/images/Gigabyte-Z490-v-1.jpg',
      chipset: 'Intel Z490',
      memoryType: 'DDR4',
      maxMemory: 128,
      slotNumber: 4,
      formFactore: 'ATX',
      condition: 'ახალი',
      price: 750,
    },
  ],
  ram: [
    {
      name: 'Corsair vengeance (2x32) 64GB DDR4 3600MHz',
      image: '/images/ram.jpg',
      size: 64,
      frequency: 3.6,
      memoryType: 'DDR4',
      condition: 'ახალი',
      price: 700,
    },
    {
      name: 'Corsair vengeance (2x16) 32GB DDR4 3200MHz',
      image: '/images/ram.jpg',
      size: 32,
      frequency: 3.2,
      memoryType: 'DDR4',
      condition: 'ახალი',
      price: 680,
    },
    {
      name: 'Kingston 8GB DDR4 2133MHz',
      image: '/images/ram.jpg',
      size: 16,
      frequency: 2.1,
      memoryType: 'DDR4',
      condition: 'ახალი',
      price: 120,
    },
    {
      name: 'Team Group 8GB DDR4 2400MHz',
      image: '/images/ram.jpg',
      size: 16,
      frequency: 2.4,
      memoryType: 'DDR4',
      condition: 'ახალი',
      price: 140,
    },
  ],
};

export default pcComponents;
