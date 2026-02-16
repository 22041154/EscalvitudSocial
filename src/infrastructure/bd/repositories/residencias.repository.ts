import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ResidenciasEntity } from '../entities/residencias.entity';
import { NotFoundException } from '@nestjs/common';

    @Injectable()
    export class ResidenciasRepository extends Repository<ResidenciasEntity> {
        constructor(private dataSource: DataSource) {
        super(ResidenciasEntity, dataSource.createEntityManager());
    }

    // ===== MÉTODOS CRUD BÁSICOS =====
    
    async obtenerTodas(): Promise<ResidenciasEntity[]> {
        return await this.find();
    }

    async obtenerPorId(id: number): Promise<ResidenciasEntity> {
        const residencia = await this.findOne({ where: { id } });
    
        if (!residencia) {
            throw new NotFoundException(`Residencia con ID ${id} no encontrada`);
        }
    
        return residencia;
    }

    async crear(residenciaData: Partial<ResidenciasEntity>): Promise<ResidenciasEntity> {
        const residencia = this.create(residenciaData);
        return await this.save(residencia);
    }

    async actualizar(id: number, residenciaData: Partial<ResidenciasEntity>): Promise<ResidenciasEntity> {
        await this.update(id, residenciaData);
        return await this.obtenerPorId(id);
    }

    async eliminar(id: number): Promise<void> {
        await this.delete(id);
    }
}