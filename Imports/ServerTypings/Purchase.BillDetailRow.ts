
namespace Indotalent.Purchase {
    export interface BillDetailRow {
        Id?: number;
        BillId?: number;
        ProductId?: number;
        Price?: number;
        Qty?: number;
        SubTotal?: number;
        Discount?: number;
        BeforeTax?: number;
        TaxPercentage?: number;
        TaxAmount?: number;
        Total?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }

    export namespace BillDetailRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Purchase.BillDetail';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Id;
            export declare const BillId;
            export declare const ProductId;
            export declare const Price;
            export declare const Qty;
            export declare const SubTotal;
            export declare const Discount;
            export declare const BeforeTax;
            export declare const TaxPercentage;
            export declare const TaxAmount;
            export declare const Total;
            export declare const InsertDate;
            export declare const InsertUserId;
            export declare const UpdateDate;
            export declare const UpdateUserId;
            export declare const TenantId;
        }

        [
            'Id',
            'BillId',
            'ProductId',
            'Price',
            'Qty',
            'SubTotal',
            'Discount',
            'BeforeTax',
            'TaxPercentage',
            'TaxAmount',
            'Total',
            'InsertDate',
            'InsertUserId',
            'UpdateDate',
            'UpdateUserId',
            'TenantId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}