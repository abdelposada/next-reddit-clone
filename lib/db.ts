import 'reflect-metadata';
import { DataSource } from 'typeorm';
import options from './ormconfig';

let AppDataSource: DataSource | null = null;

export function getAppDataSource() {
  if (!AppDataSource) {
    AppDataSource = new DataSource(options);
  }
  return AppDataSource;
}
