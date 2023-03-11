import { FieldSet } from "./field_set";
import Table from "./table";
import Record from "./record";
declare type RecordError = any;
declare type RecordJson = any;
declare type OptionalParameters = {
  typecast: boolean;
};
interface RecordCallback<TFields extends FieldSet> {
  (error: null, record: Record<TFields>): void;
  (error: RecordError): void;
}
interface RecordActionMethod<TFields extends FieldSet> {
  (): Promise<Record<TFields>>;
  (done: RecordCallback<TFields>): void;
}
interface RecordChangeMethod<TFields extends FieldSet> {
  (cellValuesByName: TFields, done: RecordCallback<TFields>): void;
  (
    cellValuesByName: TFields,
    opts: OptionalParameters,
    done: RecordCallback<TFields>
  ): void;
  (cellValuesByName: TFields, opts?: OptionalParameters): Promise<
    Record<TFields>
  >;
}
declare class DeletedRecord<TFields extends FieldSet> {
  readonly _table: Table<TFields>;
  _rawJson: RecordJson;
  readonly id: string;
  constructor(table: Table<TFields>, recordId: string, recordJson?: RecordJson);
  getId(): string;
}
export = DeletedRecord;
