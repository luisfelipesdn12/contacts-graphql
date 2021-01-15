import { CreateContactInput, UpdateContactInput } from "../inputs/ContactInputs";
import { v4 as uuid } from "uuid";

const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const dbFile = new FileSync("db.json");

export const db = lowdb(dbFile);

db.defaults({ contacts: [] }).write();

export function getAllContacts() {
    return db.get("contacts");
}

export function getContactByID(ID: string) {
    return db.get("contacts")
            .find({ id: ID })
            .value();
}

export function createContact(data: CreateContactInput) {
    const newID = uuid();

    db.get("contacts")
        .push(data)
        .last()
        .assign({ id: newID })
        .write();
    
    return newID;
}

export function updateContact(ID: string, data: UpdateContactInput) {
    const contact = getContactByID(ID);
    Object.assign(contact, data);

    db.get("contacts")
        .find({ id: ID })
        .push(contact)
        .write();
}

export function deleteContact(ID: string) {
    db.get("contacts")
        .remove({ id: ID })
        .write();
}
