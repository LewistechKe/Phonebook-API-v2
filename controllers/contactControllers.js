import { v4 as uuidv4 } from 'uuid';

let contacts = [];

export const getContacts = (req,res) => {
    res.send(contacts);
}

export const createContact = (req,res) => {
    const contact = req.body;
    contacts.push({...contact, id: uuidv4()});
    res.send(`Contact with the name ${contact.name} added to the database!`);
}

export const getContact =  (req,res) => {
    const { id } = req.params;
    const foundContact = contacts.find((contact) => contact.id === id);
    res.send(foundContact);
}

export const deleteContact =  (req,res) => {
    const { id } = req.params;
    contacts = contacts.filter((contact) => contact.id !== id);
    res.send(`Contact with the id ${id} deleted from the database.`);
}

export const updateContact = (req,res) => {
    const { id } = req.params;
    const { name, phone } = req.body;
    const contact = contacts.find((contact) => contact.id === id);
    if(name) contact.name = name;
    if(phone) contact.phone = phone;
    res.send(`Contact with the id ${id} has been updated.`);

}