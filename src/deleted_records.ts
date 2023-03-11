import Record from "./record";
import { FieldSet } from "./field_set";
import DeletedRecord from "./deleted_record";
export declare type DeletedRecords<TFields extends FieldSet> = ReadonlyArray<
  DeletedRecord<TFields>
>;
