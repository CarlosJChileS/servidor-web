import { CalificacionDatasource } from '../../domain';
import { CalificacionTypeOrmDatasourceImpl } from './calificacion.typeorm.datasource.impl';
import { CalificacionSequelizeDatasourceImpl } from './calificacion.sequelize.datasource.impl';

export enum DatasourceType {
    TYPEORM = 'typeorm',
    SEQUELIZE = 'sequelize'
}

export class DatasourceConfig {
    private static instance: CalificacionDatasource;

    static getDatasource(type: DatasourceType = DatasourceType.TYPEORM): CalificacionDatasource {
        if (!this.instance) {
            this.instance = this.createDatasource(type);
        }
        return this.instance;
    }

    static setDatasource(type: DatasourceType): void {
        this.instance = this.createDatasource(type);
    }

    private static createDatasource(type: DatasourceType): CalificacionDatasource {
        switch (type) {
            case DatasourceType.SEQUELIZE:
                return new CalificacionSequelizeDatasourceImpl();
            case DatasourceType.TYPEORM:
            default:
                return new CalificacionTypeOrmDatasourceImpl();
        }
    }
}
