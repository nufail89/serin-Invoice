
namespace Indotalent.Merchandise {
    export interface ColourRow {
        Id?: number;
        Name?: string;
        Description?: string;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }

    export namespace ColourRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Merchandise.Colour';
        export const deletePermission = 'Merchandise:Colour';
        export const insertPermission = 'Merchandise:Colour';
        export const readPermission = 'Merchandise:Colour';
        export const updatePermission = 'Merchandise:Colour';

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