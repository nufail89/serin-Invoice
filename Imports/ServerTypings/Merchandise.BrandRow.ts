
namespace Indotalent.Merchandise {
    export interface BrandRow {
        Id?: number;
        Name?: string;
        Description?: string;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }

    export namespace BrandRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Merchandise.Brand';
        export const deletePermission = 'Merchandise:Brand';
        export const insertPermission = 'Merchandise:Brand';
        export const readPermission = 'Merchandise:Brand';
        export const updatePermission = 'Merchandise:Brand';

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