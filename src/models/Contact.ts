import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Contact {
    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    phone: string;

    @Field({ nullable: true })
    email?: string;

    @Field({ nullable: true })
    website?: string;

    @Field({ nullable: true })
    notes?: string;
}
