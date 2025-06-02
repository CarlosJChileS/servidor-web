import { DataTypes, Model, Sequelize } from 'sequelize';

export class CalificacionModel extends Model {
  public id!: number;
  public grabacionId!: number;
  public usuarioId!: number | null;
  public puntajeGlobal!: number;
  public observacionGlobal!: string;
  public tipoCalificacion!: string;
  public fecha!: Date;
}

export function initCalificacionModel(sequelize: Sequelize) {
  CalificacionModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      grabacionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      puntajeGlobal: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      observacionGlobal: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tipoCalificacion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'calificaciones',
      timestamps: false,
    }
  );
}
