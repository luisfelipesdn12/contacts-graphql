import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Contact } from "../models/Contact";
import { CreateContactInput, UpdateContactInput } from "../inputs/ContactInputs";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: 5432,
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "postgres",
    entities: [Contact],
    synchronize: true,
    logging: true,
});

@Resolver()
export class ContactResolver {
    db: Promise<DataSource['manager']> = AppDataSource
        .initialize()
        .then(async (dataSource) => {
            return dataSource.manager;
        });

    @Query(() => [Contact])
    async contacts() {
        return (await this.db).find(Contact);
    }

    @Query(() => Contact)
    async contact(@Arg("id") id: string) {
        const contact = (await this.db).findOne(Contact, {
            where: { id },
        });

        if (!contact) throw new Error("Cannot find any contact with this ID");
        
        return contact;
    }

    @Mutation(() => Contact)
    async createContact(@Arg("data") data: CreateContactInput) {
        const contact = new Contact();
        Object.assign(contact, data);

        return (await contact.save()).id;
    }

    @Mutation(() => Contact)
    async updateContact(@Arg("id") id: string, @Arg("data") data: UpdateContactInput) {
        const contact = await this.contact(id);

        if (!contact) {
            throw new Error("Contact not found");
        }

        Object.assign(contact, data);

        return await contact.save();
    }

    @Mutation(() => Boolean)
    async deleteContact(@Arg("id") id: string) {
        const contact = await this.contact(id);

        if (!contact) {
            throw new Error("Contact not found");
        }

        return contact
            .remove()
            .then(() => true)
            .catch(() => false);
    }
}