import { ValidationException } from '../exceptions/validation.exceptions';
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    const obj = plainToInstance(metadata.metatype, value);
    const errors = await validate(obj);
    console.log(errors);
    if (errors.length) {
      let messages = errors.map((err) => {
        return `${err.property}-${Object.values(err.constraints).join(', |')}`;
      });
      throw new ValidationException(messages);
    }
    return value;
  }
}
