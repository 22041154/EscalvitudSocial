import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ResRegistroAlumnosEntity } from '../entities/res-registro-alumno.entity';
import { NotFoundException } from '@nestjs/common';

    @Injectable()
    export class ResRegistroAlumnoRepository extends Repository<ResRegistroAlumnosEntity> {
        constructor(private dataSource: DataSource) {
        super(ResRegistroAlumnosEntity, dataSource.createEntityManager());
    }

    // ===== MÉTODOS CRUD BÁSICOS =====
    
    async obtenerTodas(): Promise<ResRegistroAlumnosEntity[]> {
        return await this.find();
    }

    async obtenerPorId(id: number): Promise<ResRegistroAlumnosEntity> {
        const registro = await this.findOne({ where: { id } });
    
        if (!registro) {
            throw new NotFoundException(`Registro con ID ${id} no encontrado`);
        }
    
        return registro;
    }

    async crear(registroData: Partial<ResRegistroAlumnosEntity>): Promise<ResRegistroAlumnosEntity> {
        const registro = this.create(registroData);
        return await this.save(registro);
    }

    async actualizar(id: number, registroData: Partial<ResRegistroAlumnosEntity>): Promise<ResRegistroAlumnosEntity> {
        await this.update(id, registroData);
        return await this.obtenerPorId(id);
    }

    async eliminar(id: number): Promise<void> {
        await this.delete(id);
    }
}