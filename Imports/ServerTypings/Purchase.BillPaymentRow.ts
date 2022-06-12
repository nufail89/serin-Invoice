
namespace Indotalent.Purchase {
    export interface BillPaymentRow {
        Id?: number;
        BillId?: number;
        Number?: string;
        Description?: string;
        ProcurementGroup?: string;
        PaymentDate?: string;
        CashBankId?: number;
        BillAmount?: number;
        PaymentAmount?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }

    export namespace BillPaymentRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Number';
        export const localTextPrefix = 'Purchase.BillPayment';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Id;
            export declare const BillId;
            export declare const Number;
            export declare const Description;
            export declare const ProcurementGroup;
            export declare const PaymentDate;
            export declare const CashBankId;
            export declare const BillAmount;
            export declare const PaymentAmount;
            export declare const InsertDate;
            export declare const InsertUserId;
            export declare const UpdateDate;
            export declare const UpdateUserId;
            export declare const TenantId;
        }

        [
            'Id',
            'BillId',
            'Number',
            'Description',
            'ProcurementGroup',
            'PaymentDate',
            'CashBankId',
            'BillAmount',
            'PaymentAmount',
            'InsertDate',
            'InsertUserId',
            'UpdateDate',
            'UpdateUserId',
            'TenantId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}