import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ResSeguimientoEntity } from '../entities/res-seguimiento.entity';
import { NotFoundException } from '@nestjs/common';

    @Injectable()
    export class ResSeguimientoRepository extends Repository<ResSeguimientoEntity> {
        constructor(private dataSource: DataSource) {
        super(ResSeguimientoEntity, dataSource.createEntityManager());
    }

    // ===== MÉTODOS CRUD BÁSICOS =====
    
    async obtenerTodas(): Promise<ResSeguimientoEntity[]> {
        return await this.find();
    }

    async obtenerPorId(id: number): Promise<ResSeguimientoEntity> {
        const seguimiento = await this.findOne({ where: { id } });
    
        if (!seguimiento) {
            throw new NotFoundException(`Seguimiento con ID ${id} no encontrado`);
        }
    
        return seguimiento;
    }

    async crear(seguimientoData: Partial<ResSeguimientoEntity>): Promise<ResSeguimientoEntity> {
        const seguimiento = this.create(seguimientoData);
        return await this.save(seguimiento);
    }

    async actualizar(id: number, seguimientoData: Partial<ResSeguimientoEntity>): Promise<ResSeguimientoEntity> {
        await this.update(id, seguimientoData);
        return await this.obtenerPorId(id);
    }

    async eliminar(id: number): Promise<void> {
        await this.delete(id);
    }
}