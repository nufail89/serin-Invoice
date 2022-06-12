
namespace Indotalent.Merchandise {
    export interface ProductRow {
        Id?: number;
        Name?: string;
        Description?: string;
        Picture?: string;
        InternalCode?: string;
        Barcode?: string;
        UomId?: number;
        BrandId?: number;
        CategoryId?: number;
        SizeId?: number;
        ColourId?: number;
        FlavourId?: number;
        PurchasePrice?: number;
        SalesPrice?: number;
        PurchaseTaxId?: number;
        SalesTaxId?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }

    export namespace ProductRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Merchandise.Product';
        export const deletePermission = 'Merchandise:Product';
        export const insertPermission = 'Merchandise:Product';
        export const readPermission = 'Merchandise:Product';
        export const updatePermission = 'Merchandise:Product';

        export namespace Fields {
            export declare const Id;
            export declare const Name;
            export declare const Description;
            export declare const Picture;
            export declare const InternalCode;
            export declare const Barcode;
            export declare const UomId;
            export declare const BrandId;
            export declare const CategoryId;
            export declare const SizeId;
            export declare const ColourId;
            export declare const FlavourId;
            export declare const PurchasePrice;
            export declare const SalesPrice;
            export declare const PurchaseTaxId;
            export declare const SalesTaxId;
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
            'Picture',
            'InternalCode',
            'Barcode',
            'UomId',
            'BrandId',
            'CategoryId',
            'SizeId',
            'ColourId',
            'FlavourId',
            'PurchasePrice',
            'SalesPrice',
            'PurchaseTaxId',
            'SalesTaxId',
            'InsertDate',
            'InsertUserId',
            'UpdateDate',
            'UpdateUserId',
            'TenantId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}