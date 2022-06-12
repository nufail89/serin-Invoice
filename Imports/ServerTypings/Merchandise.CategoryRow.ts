
namespace Indotalent.Merchandise {
    export interface CategoryRow {
        Id?: number;
        Name?: string;
        Description?: string;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }

    export namespace CategoryRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Merchandise.Category';
        export const deletePermission = 'Merchandise:Category';
        export const insertPermission = 'Merchandise:Category';
        export const readPermission = 'Merchandise:Category';
        export const updatePermission = 'Merchandise:Category';

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