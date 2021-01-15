import { InputType, Field } from "type-graphql";

@InputType()
export class CreateContactInput {
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

@InputType()
export class UpdateContactInput {
    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    phone?: string;

    @Field({ nullable: true })
    email?: string;

    @Field({ nullable: true })
    website?: string;

    @Field({ nullable: true })
    notes?: string;
}
