
namespace Indotalent.Purchase {
    export interface PurchaseOrderRow {
        Id?: number;
        Number?: string;
        Description?: string;
        ProcurementGroup?: string;
        OrderDate?: string;
        VendorId?: number;
        SubTotal?: number;
        Discount?: number;
        BeforeTax?: number;
        TaxAmount?: number;
        Total?: number;
        OtherCharge?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }

    export namespace PurchaseOrderRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Number';
        export const localTextPrefix = 'Purchase.PurchaseOrder';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Id;
            export declare const Number;
            export declare const Description;
            export declare const ProcurementGroup;
            export declare const OrderDate;
            export declare const VendorId;
            export declare const SubTotal;
            export declare const Discount;
            export declare const BeforeTax;
            export declare const TaxAmount;
            export declare const Total;
            export declare const OtherCharge;
            export declare const InsertDate;
            export declare const InsertUserId;
            export declare const UpdateDate;
            export declare const UpdateUserId;
            export declare const TenantId;
        }

        [
            'Id',
            'Number',
            'Description',
            'ProcurementGroup',
            'OrderDate',
            'VendorId',
            'SubTotal',
            'Discount',
            'BeforeTax',
            'TaxAmount',
            'Total',
            'OtherCharge',
            'InsertDate',
            'InsertUserId',
            'UpdateDate',
            'UpdateUserId',
            'TenantId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}