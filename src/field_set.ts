import { Collaborator } from "./collaborator";
import { Attachment } from "./attachment";
import {
  AttachmentParam,
  Barcode,
  Button,
  CollaboratorParams,
  LastModifiedTime,
} from "./additional_types";
export interface FieldSet {
  Write: {
    [key: string]:
      | undefined
      | string
      | string[]
      | number
      | boolean
      | Collaborator
      | AttachmentParam[]
      | LastModifiedTime
      | Button
      | Barcode
      | CollaboratorParams
      | CollaboratorParams[];
  };
  Read: {
    [key: string]:
      | undefined
      | string
      | number
      | boolean
      | Collaborator
      | ReadonlyArray<Collaborator>
      | ReadonlyArray<string>
      | ReadonlyArray<Attachment>
      | { url: string }[]
      | LastModifiedTime
      | Button
      | Barcode;
  };
}
