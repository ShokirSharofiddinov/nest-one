import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface BuilderAttr {
  full_name: string;
  birth_day: Date;
  salary: Number;
  company_id: Number;
}

@Table({ tableName: 'builder' })
export class Builder extends Model<Builder, BuilderAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  full_name: string;

  @Column({
    type: DataType.DATE,
  })
  birth_day: Date;

  @Column({
    type: DataType.DECIMAL,
  })
  salary: Number;

  @Column({
    type: DataType.INTEGER,
  })
  company_id: Number;
}
