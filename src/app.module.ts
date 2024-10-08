import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BikesController } from './controllers/bikes.controller';
import { BikesService } from './services/bikes.service';
import { Bike } from './entities/bike.entity';
import { SqljsConnectionOptions } from 'typeorm/driver/sqljs/SqljsConnectionOptions';

// Configuration for SQL.js database connection

const options: SqljsConnectionOptions = {
  type: 'sqljs',
  autoSave: true,
  location: 'database',
  useLocalForage: true,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};

@Module({
    imports: [
        TypeOrmModule.forRoot(options),
        TypeOrmModule.forFeature([Bike]),
    ],
    controllers: [BikesController],
    providers: [BikesService],
})
export class AppModule {}