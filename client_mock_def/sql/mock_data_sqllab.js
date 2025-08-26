export const mockSQLLabResultData = [
    { id: 1, product: 'Laptop', category: 'Electronics', price: 1200 },
    { id: 2, product: 'Smartphone', category: 'Electronics', price: 800 },
    { id: 3, product: 'Desk', category: 'Furniture', price: 350 },
    { id: 4, product: 'Chair', category: 'Furniture', price: 150 },
    { id: 5, product: 'Pen', category: 'Stationery', price: 5 }
];

export const mockSQLQueries = {
    default: 'SELECT * FROM products;',
    analytics: 'SELECT category, COUNT(*) as count, AVG(price) as avg_price FROM products GROUP BY category;',
    developer: 'SELECT * FROM products WHERE category = "Electronics" ORDER BY price DESC;',
    admin: 'SHOW TABLES; DESCRIBE products;'
};

export const mockDatabaseSchemas = [
    {
        name: 'ecommerce',
        tables: [
            {
                name: 'products',
                columns: ['id', 'product', 'category', 'price', 'stock', 'created_at']
            },
            {
                name: 'orders',
                columns: ['id', 'customer_id', 'product_id', 'quantity', 'total', 'order_date']
            },
            {
                name: 'customers',
                columns: ['id', 'name', 'email', 'address', 'phone', 'created_at']
            }
        ]
    },
    {
        name: 'analytics',
        tables: [
            {
                name: 'user_events',
                columns: ['id', 'user_id', 'event_type', 'timestamp', 'metadata']
            },
            {
                name: 'page_views',
                columns: ['id', 'user_id', 'page_url', 'view_time', 'referrer']
            }
        ]
    }
];

export const mockQueryHistory = [
    {
        query: 'SELECT * FROM products WHERE price > 500;',
        time: 245,
        timestamp: '2024-01-15 10:30:00',
        status: 'success',
        rowsAffected: 3
    },
    {
        query: 'UPDATE products SET stock = stock - 1 WHERE id = 2;',
        time: 120,
        timestamp: '2024-01-15 10:28:00',
        status: 'success',
        rowsAffected: 1
    },
    {
        query: 'SELECT category, AVG(price) FROM products GROUP BY category;',
        time: 180,
        timestamp: '2024-01-15 10:25:00',
        status: 'success',
        rowsAffected: 3
    }
];