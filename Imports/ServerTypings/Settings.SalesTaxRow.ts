
namespace Indotalent.Settings {
    export interface SalesTaxRow {
        Id?: number;
        Name?: string;
        Description?: string;
        TaxRatePercentage?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }

    export namespace SalesTaxRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Settings.SalesTax';
        export const deletePermission = 'Sales:SalesOrder';
        export const insertPermission = 'Sales:SalesOrder';
        export const readPermission = 'Sales:SalesOrder';
        export const updatePermission = 'Sales:SalesOrder';

        export namespace Fields {
            export declare const Id;
            export declare const Name;
            export declare const Description;
            export declare const TaxRatePercentage;
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
            'TaxRatePercentage',
            'InsertDate',
            'InsertUserId',
            'UpdateDate',
            'UpdateUserId',
            'TenantId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}