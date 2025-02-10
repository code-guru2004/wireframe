import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({

    schema: './database/schema.js',
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_vQ8MESZ5umdP@ep-dawn-snowflake-a89ud7in-pooler.eastus2.azure.neon.tech/ai-interior?sslmode=require',
      },
});