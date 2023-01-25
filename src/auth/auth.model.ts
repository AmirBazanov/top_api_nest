import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({_id: true, timestamps: true})
export class AuthModel{
	@Prop({unique: true})
	email: string;

	@Prop()
	passwordHash: string;
}

export const AuthModelSchema = SchemaFactory.createForClass(AuthModel);