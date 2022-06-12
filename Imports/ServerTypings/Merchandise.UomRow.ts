
namespace Indotalent.Merchandise {
    export interface UomRow {
        Id?: number;
        Name?: string;
        Description?: string;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }

    export namespace UomRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Merchandise.Uom';
        export const deletePermission = 'Merchandise:Uom';
        export const insertPermission = 'Merchandise:Uom';
        export const readPermission = 'Merchandise:Uom';
        export const updatePermission = 'Merchandise:Uom';

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