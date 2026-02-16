import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ResCalifDocenteEntity } from '../entities/res-calif-docente.entity';
import { NotFoundException } from '@nestjs/common';

    @Injectable()
    export class ResCalifDocenteRepository extends Repository<ResCalifDocenteEntity> {
        constructor(private dataSource: DataSource) {
        super(ResCalifDocenteEntity, dataSource.createEntityManager());
    }

    // ===== MÉTODOS CRUD BÁSICOS =====
    
    async obtenerTodas(): Promise<ResCalifDocenteEntity[]> {
        return await this.find();
    }

    async obtenerPorId(id: number): Promise<ResCalifDocenteEntity> {
        const calificacion = await this.findOne({ where: { id } });
    
        if (!calificacion) {
            throw new NotFoundException(`Calificacion con ID ${id} no encontrada`);
        }
    
        return calificacion;
    }

    async crear(calificacionData: Partial<ResCalifDocenteEntity>): Promise<ResCalifDocenteEntity> {
        const calificacion = this.create(calificacionData);
        return await this.save(calificacion);
    }

    async actualizar(id: number, calificacionData: Partial<ResCalifDocenteEntity>): Promise<ResCalifDocenteEntity> {
        await this.update(id, calificacionData);
        return await this.obtenerPorId(id);
    }

    async eliminar(id: number): Promise<void> {
        await this.delete(id);
    }
}