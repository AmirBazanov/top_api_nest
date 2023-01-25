import { Module } from '@nestjs/common';
import { TopPageController } from './top-page.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TopPageModelSchema } from './top-page.model';

@Module({
	controllers: [TopPageController],
	imports: [MongooseModule.forFeature([{
		name: 'TopPage',
		schema: TopPageModelSchema,
		collection: 'TopPage'
	}])]
})
export class TopPageModule {}
