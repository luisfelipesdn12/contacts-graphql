import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Contact } from "../models/Contact";
import { getAllContacts, getContactByID, createContact, updateContact, deleteContact } from "../db/index";
import { CreateContactInput, UpdateContactInput } from "../inputs/ContactInputs";

@Resolver()
export class ContactResolver {
    @Query(() => [Contact])
    contacts() {
        return getAllContacts();
    }

    @Query(() => Contact)
    contact(@Arg("id") id: string) {
        const contact = getContactByID(id);
        if (!contact) throw new Error("Cannot find any contact with this ID");
        
        return contact;
    }

    @Mutation(() => Contact)
    createContact(@Arg("data") data: CreateContactInput) {
        const newContactID = createContact(data);
        return getContactByID(newContactID);
    }

    @Mutation(() => Contact)
    updateContact(@Arg("id") id: string, @Arg("data") data: UpdateContactInput) {
        if (!getContactByID(id)) throw new Error("Cannot find any contact with this ID");

        updateContact(id, data);
        return getContactByID(id);
    }

    @Mutation(() => Boolean)
    deleteContact(@Arg("id") id: string) {
        if (!getContactByID(id)) return false;

        deleteContact(id);
        return true;
    }
}