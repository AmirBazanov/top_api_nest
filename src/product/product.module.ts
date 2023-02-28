import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModelSchema } from './product.model';
import { ProductService } from './product.service';

@Module({
  controllers: [ProductController],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Product',
        schema: ProductModelSchema,
        collection: 'Product',
      },
    ]),
  ],
  providers: [ProductService],
})
export class ProductModule {}
