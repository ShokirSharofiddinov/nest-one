import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface MachineAttr {
  name: string;
  company_id: Number;
}

@Table({ tableName: 'machine' })
export class Machine extends Model<Machine, MachineAttr> {
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
  name: string;

  @Column({
    type: DataType.INTEGER,
  })
  company_id: Number;
}
