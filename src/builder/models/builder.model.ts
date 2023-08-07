import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Company } from '../../company/models/company.model';

interface BuilderAttr {
  full_name: string;
  birth_day: Date;
  salary: number;
  company_id: number;
}

@Table({ tableName: 'builder' })
export class Builder extends Model<Builder, BuilderAttr> {
  @ApiProperty({ example: 1, description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'full_name',
    description: 'not null builder full name',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  full_name: string;

  @ApiProperty({ example: '7/22/2023', description: 'builder birth day' })
  @Column({
    type: DataType.DATE,
  })
  birth_day: Date;

  @ApiProperty({ example: '2000$', description: 'builder salary' })
  @Column({
    type: DataType.DECIMAL,
  })
  salary: number;

  @ApiProperty({ example: 1, description: 'builder company id' })
  @ForeignKey(() => Company)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  company_id: number;

  @BelongsTo(() => Company)
  company: Company;
}
