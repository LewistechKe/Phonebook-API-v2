import express from 'express';
import { createContact, getContacts, getContact, deleteContact, updateContact } from '../controllers/contactControllers.js';
const router = express.Router();


//all routes here are starting with /contacts
router.get('/', getContacts);
router.post('/', createContact);
///users/2 => req.params {id:2}
router.get('/:id', getContact);
router.delete('/:id', deleteContact);
router.patch('/:id', updateContact);

export default router;