import DB from '../utils/db.js'

async function seed() {
    try {

        await DB.schema.dropTableIfExists('products')
        await DB.schema.dropTableIfExists('users')

        await DB.schema.createTable('users', (table) => {
            table.increments('id').primary()
            table.string('email', 100).notNullable().unique()
            table.string('password', 255).notNullable()
            table.timestamp('created_at').defaultTo(DB.fn.now())
        })

        await DB.schema.createTable('products', (table) => {
            table.increments('id').primary()
            table.string('name', 100).notNullable()
            table.text('description')
            table.decimal('price', 12, 2).notNullable()
            table.timestamp('created_at').defaultTo(DB.fn.now())
        })

        await DB('users').insert({
            email: 'jesus.rueda.04@gmail.com',
            password: '$2b$10$5xu5TIDt..9rc6whiV5tC.73j.9AsQ6Ug.a.lXNz5dKNw6rehW8vS'
        })

        await DB('products').insert([
            { name: 'Laptop', description: '14-inch business laptop with 16GB RAM', price: 4800000.00 },
            { name: 'Smartphone', description: 'Latest Android smartphone with 128GB storage', price: 2800000.00 },
            { name: 'Tablet', description: '10-inch tablet with stylus support', price: 1800000.00 },
            { name: 'Wireless Mouse', description: 'Ergonomic wireless mouse with USB receiver', price: 120000.00 },
            { name: 'Mechanical Keyboard', description: 'RGB backlit mechanical keyboard', price: 350000.00 },
            { name: 'Headphones', description: 'Noise-cancelling over-ear headphones', price: 800000.00 },
            { name: 'Gaming Chair', description: 'Ergonomic chair for gaming and office', price: 1400000.00 },
            { name: 'Monitor', description: '27-inch 4K UHD monitor', price: 1300000.00 },
            { name: 'External Hard Drive', description: '2TB USB 3.0 portable hard drive', price: 400000.00 },
            { name: 'USB-C Hub', description: '7-in-1 USB-C hub with HDMI output', price: 200000.00 },
            { name: 'Coffee Maker', description: 'Automatic drip coffee machine', price: 360000.00 },
            { name: 'Backpack', description: 'Waterproof travel backpack 30L', price: 250000.00 },
            { name: 'Smartwatch', description: 'Fitness smartwatch with heart rate monitor', price: 600000.00 },
            { name: 'Bluetooth Speaker', description: 'Portable waterproof Bluetooth speaker', price: 300000.00 },
            { name: 'Electric Kettle', description: 'Stainless steel fast boiling kettle', price: 150000.00 },
            { name: 'Desk Lamp', description: 'LED lamp with adjustable brightness', price: 120000.00 },
            { name: 'Office Desk', description: 'Wooden office desk with drawers', price: 800000.00 },
            { name: 'Printer', description: 'Wireless color inkjet printer', price: 720000.00 },
            { name: 'Router', description: 'Dual-band Wi-Fi 6 router', price: 520000.00 },
            { name: 'Webcam', description: 'Full HD 1080p USB webcam', price: 270000.00 },
            { name: 'Sofa', description: '3-seater fabric sofa', price: 2000000.00 },
            { name: 'Dining Table', description: 'Wooden dining table for 6 persons', price: 3200000.00 },
            { name: 'TV 55-inch', description: 'Smart 4K UHD television', price: 2600000.00 },
            { name: 'Soundbar', description: 'Home theater soundbar with subwoofer', price: 1200000.00 },
            { name: 'Microwave', description: '20L digital microwave oven', price: 480000.00 },
            { name: 'Air Fryer', description: '3.5L hot air fryer for healthy cooking', price: 450000.00 },
            { name: 'Smart Light Bulb', description: 'Wi-Fi controlled RGB LED bulb', price: 100000.00 },
            { name: 'Power Bank', description: '20,000mAh portable charger', price: 180000.00 },
            { name: 'Drone', description: 'Quadcopter drone with 4K camera', price: 1600000.00 },
            { name: 'Electric Scooter', description: 'Foldable electric scooter with 25km range', price: 2000000.00 },
            { name: 'Refrigerator', description: 'Double-door 300L refrigerator', price: 3400000.00 },
            { name: 'Washing Machine', description: 'Front-load washing machine 9kg', price: 3000000.00 },
            { name: 'Dishwasher', description: '12-place setting dishwasher', price: 2800000.00 },
            { name: 'Vacuum Cleaner', description: 'Cordless stick vacuum cleaner', price: 1000000.00 },
            { name: 'Ceiling Fan', description: 'Modern ceiling fan with remote', price: 500000.00 },
            { name: 'Bed Frame', description: 'Queen size wooden bed frame', price: 1400000.00 },
            { name: 'Mattress', description: 'Memory foam mattress queen size', price: 2000000.00 },
            { name: 'Wardrobe', description: '3-door wardrobe with mirror', price: 2400000.00 },
            { name: 'Bookshelf', description: '5-tier wooden bookshelf', price: 600000.00 },
            { name: 'Office Chair', description: 'Adjustable ergonomic office chair', price: 720000.00 },
            { name: 'Camera', description: 'Mirrorless digital camera with 24MP', price: 4000000.00 },
            { name: 'Tripod', description: 'Aluminum camera tripod 1.5m', price: 300000.00 },
            { name: 'Microphone', description: 'USB condenser microphone', price: 520000.00 },
            { name: 'Action Camera', description: '4K waterproof action camera', price: 1200000.00 },
            { name: 'Smart Glasses', description: 'AR smart glasses with Bluetooth', price: 1800000.00 },
            { name: 'Bicycle', description: 'Mountain bike 21-speed', price: 1600000.00 },
            { name: 'Treadmill', description: 'Foldable treadmill with LCD display', price: 2600000.00 },
            { name: 'Dumbbell Set', description: 'Adjustable dumbbell set 40kg', price: 480000.00 },
            { name: 'Yoga Mat', description: 'Non-slip yoga mat 6mm', price: 150000.00 },
            { name: 'Tennis Racket', description: 'Lightweight graphite tennis racket', price: 360000.00 }
        ])

        console.log('Database seeded successfully!')
        
    } catch (error) {
        console.error('Error seeding database:', error)
    } finally {
        await DB.destroy()
    }
}

seed()