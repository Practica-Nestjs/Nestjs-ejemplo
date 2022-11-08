export const EnvConfiguration = () => ({
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  database: process.env.DB_NAME,
  db_username: process.env.DB_USERNAME,
  db_password: process.env.DB_PASSWORD,
  syncronizedb: Boolean(process.env.DB_SYNCHRONIZE),
});
