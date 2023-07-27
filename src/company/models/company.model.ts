import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Builder } from '../../builder/models/builder.model';

interface CompanyAttr {
  name: string;
  address: string;
  phone: string;
}

@Table({ tableName: 'company' })
export class Company extends Model<Company, CompanyAttr> {
  @ApiProperty({ example: 1, description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'company1', description: 'not null name' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;

  @ApiProperty({ example: 'address1', description: 'company address' })
  @Column({
    type: DataType.STRING,
  })
  address: string;

  @ApiProperty({ example: '99 999 99 99', description: 'company phone numer' })
  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @HasMany(() => Builder)
  builders: Builder[];
}
