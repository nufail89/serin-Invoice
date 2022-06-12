
namespace Indotalent.Settings {
    export interface CashBankRow {
        Id?: number;
        Name?: string;
        Description?: string;
        AccountNumber?: string;
        Street?: string;
        City?: string;
        State?: string;
        ZipCode?: string;
        Phone?: string;
        Email?: string;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }

    export namespace CashBankRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Settings.CashBank';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Id;
            export declare const Name;
            export declare const Description;
            export declare const AccountNumber;
            export declare const Street;
            export declare const City;
            export declare const State;
            export declare const ZipCode;
            export declare const Phone;
            export declare const Email;
            export declare const InsertDate;
            export declare const InsertUserId;
            export declare const UpdateDate;
            export declare const UpdateUserId;
            export declare const TenantId;
        }

        [
            'Id',
            'Name',
            'Description',
            'AccountNumber',
            'Street',
            'City',
            'State',
            'ZipCode',
            'Phone',
            'Email',
            'InsertDate',
            'InsertUserId',
            'UpdateDate',
            'UpdateUserId',
            'TenantId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}