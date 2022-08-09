import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsArray } from 'class-validator';
import { Document } from 'mongoose';
export type AuthDocument = Auth & Document;

@Schema()
export class Auth {
  @Prop()
  username: string;

  @Prop()
  name: string;

  @Prop()
  password: string;

  @IsArray()
  roles: string[];
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
