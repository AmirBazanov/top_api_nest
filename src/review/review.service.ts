import { Injectable } from '@nestjs/common';
import { ReviewModel } from './review.model';
import { HydratedDocument, Model, Types } from 'mongoose';
import { CreateReviewDto } from './dto/create-review.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ReviewService {
	constructor(@InjectModel('Review') private readonly reviewModel: Model<ReviewModel>) {}

	async create(dto: CreateReviewDto): Promise<HydratedDocument<ReviewModel>>{
		return this.reviewModel.create(dto);
	}

	async delete(id: string): Promise<HydratedDocument<ReviewModel>| null>{
		return this.reviewModel.findByIdAndDelete(id).exec();
	}

	async findByProductId(id: string): Promise<HydratedDocument<ReviewModel>[]>{
		return this.reviewModel.find({productId: new Types.ObjectId(id)}).exec();
	}
}
