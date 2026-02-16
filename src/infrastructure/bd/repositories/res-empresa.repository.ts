import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ResEmpresaEntity } from '../entities/res-empresa.entity';
import { NotFoundException } from '@nestjs/common';

    @Injectable()
    export class ResEmpresaRepository extends Repository<ResEmpresaEntity> {
        constructor(private dataSource: DataSource) {
        super(ResEmpresaEntity, dataSource.createEntityManager());
    }

    // ===== MÉTODOS CRUD BÁSICOS =====
    
    async obtenerTodas(): Promise<ResEmpresaEntity[]> {
        return await this.find();
    }

    async obtenerPorId(id: number): Promise<ResEmpresaEntity> {
        const empresa = await this.findOne({ where: { id } });
    
        if (!empresa) {
            throw new NotFoundException(`Empresa con ID ${id} no encontrada`);
        }
    
        return empresa;
    }

    async crear(empresaData: Partial<ResEmpresaEntity>): Promise<ResEmpresaEntity> {
        const empresa = this.create(empresaData);
        return await this.save(empresa);
    }

    async actualizar(id: number, empresaData: Partial<ResEmpresaEntity>): Promise<ResEmpresaEntity> {
        await this.update(id, empresaData);
        return await this.obtenerPorId(id);
    }

    async eliminar(id: number): Promise<void> {
        await this.delete(id);
    }
}