export interface Button {
  label: string;
  url: string;
}

export type LastModifiedTime = string;

export interface Barcode {
  text: string;
}

export type CollaboratorParams =
  | { id: string; email: string }
  | { id: string }
  | { email: string };

export interface AttachmentParam {
  url: string;
}
