import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewModelSchema } from './review.model';
import { ReviewService } from './review.service';

@Module({
	controllers: [ReviewController],
	imports: [MongooseModule.forFeature([{
		name: 'Review',
		schema: ReviewModelSchema,
		collection: 'Review'
	}])],
	providers: [ReviewService]
})
export class ReviewModule {}
