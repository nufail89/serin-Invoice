
namespace Indotalent.Merchandise {
    export interface FlavourRow {
        Id?: number;
        Name?: string;
        Description?: string;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }

    export namespace FlavourRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Merchandise.Flavour';
        export const deletePermission = 'Merchandise:Flavour';
        export const insertPermission = 'Merchandise:Flavour';
        export const readPermission = 'Merchandise:Flavour';
        export const updatePermission = 'Merchandise:Flavour';

        export namespace Fields {
            export declare const Id;
            export declare const Name;
            export declare const Description;
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
            'InsertDate',
            'InsertUserId',
            'UpdateDate',
            'UpdateUserId',
            'TenantId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}