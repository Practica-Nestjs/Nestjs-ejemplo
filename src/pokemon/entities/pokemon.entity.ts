import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'POKEMON' })
export class Pokemon {
    @PrimaryColumn()
    id: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    name: string;
    
    @Column({ type: 'int', unique: true })
    numberPoke: number;

    @Column({ type: 'varchar', length: 255, unique: true })
    urlImg: string;
}
