import { ObjectType, Field } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
@ObjectType()
export class Contact extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    phone: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    email?: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    website?: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    notes?: string;
}
