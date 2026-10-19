import pg from 'pg';

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
});

// async function getPgVersion() {
//     let client;
//     try {
//         client = await pool.connect();
//         const result = await client.query('SELECT version()');
//         console.log(result.rows[0]);
//     } catch (error) {
//         console.error('Database connection failed:', error);
//         process.exitCode = 1;
//     } finally {
//         client?.release();
//         await pool.end();
//     }
// }

// await getPgVersion();

export default pool;