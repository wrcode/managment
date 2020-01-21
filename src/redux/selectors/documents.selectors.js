import { path } from "ramda";

export const getDocuments = path(["documents", "documents"]);
export const getDocument = path(["documents", "document"]);

export const getDocumentImage = path(["documents", "document", "image"]);
export const getDocumentID = path(["documents", "document", "id"]);
