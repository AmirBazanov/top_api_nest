import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModelSchema } from './product.model';

@Module({
	controllers: [ProductController],
	imports: [MongooseModule.forFeature([{
		name: 'Product',
		schema: ProductModelSchema,
		collection: 'Product'
	}])]
})
export class ProductModule {}
