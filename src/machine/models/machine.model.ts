import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Company } from 'src/company/models/company.model';
import { Machine_driver } from 'src/machine_driver/models/machine_driver.model';

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

  @ForeignKey(() => Company)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  company_id: number;

  @BelongsTo(() => Company)
  company: Company;

  @HasMany(() => Machine_driver)
  machine_driver: Machine_driver[];
}
