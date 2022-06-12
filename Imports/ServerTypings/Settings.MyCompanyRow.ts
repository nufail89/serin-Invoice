
namespace Indotalent.Settings {
    export interface MyCompanyRow {
        TenantId?: number;
        TenantName?: string;
        Description?: string;
        Currency?: string;
        Street?: string;
        City?: string;
        State?: string;
        ZipCode?: string;
        Phone?: string;
        Email?: string;
        ProductNumberPrefix?: string;
        ProductNumberUseDate?: number;
        ProductNumberLength?: number;
        CustomerNumberPrefix?: string;
        CustomerNumberUseDate?: number;
        CustomerNumberLength?: number;
        SalesNumberPrefix?: string;
        SalesNumberUseDate?: number;
        SalesNumberLength?: number;
        InvoiceNumberPrefix?: string;
        InvoiceNumberUseDate?: number;
        InvoiceNumberLength?: number;
        InvoicePaymentNumberPrefix?: string;
        InvoicePaymentNumberUseDate?: number;
        InvoicePaymentNumberLength?: number;
        VendorNumberPrefix?: string;
        VendorNumberUseDate?: number;
        VendorNumberLength?: number;
        PurchaseNumberPrefix?: string;
        PurchaseNumberUseDate?: number;
        PurchaseNumberLength?: number;
        BillNumberPrefix?: string;
        BillNumberUseDate?: number;
        BillNumberLength?: number;
        BillPaymentNumberPrefix?: string;
        BillPaymentNumberUseDate?: number;
        BillPaymentNumberLength?: number;
        MaximumUser?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
    }

    export namespace MyCompanyRow {
        export const idProperty = 'TenantId';
        export const nameProperty = 'TenantName';
        export const localTextPrefix = 'Settings.MyCompany';
        export const deletePermission = 'Settings:MyCompany';
        export const insertPermission = 'Settings:MyCompany';
        export const readPermission = 'Settings:MyCompany';
        export const updatePermission = 'Settings:MyCompany';

        export namespace Fields {
            export declare const TenantId;
            export declare const TenantName;
            export declare const Description;
            export declare const Currency;
            export declare const Street;
            export declare const City;
            export declare const State;
            export declare const ZipCode;
            export declare const Phone;
            export declare const Email;
            export declare const ProductNumberPrefix;
            export declare const ProductNumberUseDate;
            export declare const ProductNumberLength;
            export declare const CustomerNumberPrefix;
            export declare const CustomerNumberUseDate;
            export declare const CustomerNumberLength;
            export declare const SalesNumberPrefix;
            export declare const SalesNumberUseDate;
            export declare const SalesNumberLength;
            export declare const InvoiceNumberPrefix;
            export declare const InvoiceNumberUseDate;
            export declare const InvoiceNumberLength;
            export declare const InvoicePaymentNumberPrefix;
            export declare const InvoicePaymentNumberUseDate;
            export declare const InvoicePaymentNumberLength;
            export declare const VendorNumberPrefix;
            export declare const VendorNumberUseDate;
            export declare const VendorNumberLength;
            export declare const PurchaseNumberPrefix;
            export declare const PurchaseNumberUseDate;
            export declare const PurchaseNumberLength;
            export declare const BillNumberPrefix;
            export declare const BillNumberUseDate;
            export declare const BillNumberLength;
            export declare const BillPaymentNumberPrefix;
            export declare const BillPaymentNumberUseDate;
            export declare const BillPaymentNumberLength;
            export declare const MaximumUser;
            export declare const InsertDate;
            export declare const InsertUserId;
            export declare const UpdateDate;
            export declare const UpdateUserId;
        }

        [
            'TenantId',
            'TenantName',
            'Description',
            'Currency',
            'Street',
            'City',
            'State',
            'ZipCode',
            'Phone',
            'Email',
            'ProductNumberPrefix',
            'ProductNumberUseDate',
            'ProductNumberLength',
            'CustomerNumberPrefix',
            'CustomerNumberUseDate',
            'CustomerNumberLength',
            'SalesNumberPrefix',
            'SalesNumberUseDate',
            'SalesNumberLength',
            'InvoiceNumberPrefix',
            'InvoiceNumberUseDate',
            'InvoiceNumberLength',
            'InvoicePaymentNumberPrefix',
            'InvoicePaymentNumberUseDate',
            'InvoicePaymentNumberLength',
            'VendorNumberPrefix',
            'VendorNumberUseDate',
            'VendorNumberLength',
            'PurchaseNumberPrefix',
            'PurchaseNumberUseDate',
            'PurchaseNumberLength',
            'BillNumberPrefix',
            'BillNumberUseDate',
            'BillNumberLength',
            'BillPaymentNumberPrefix',
            'BillPaymentNumberUseDate',
            'BillPaymentNumberLength',
            'MaximumUser',
            'InsertDate',
            'InsertUserId',
            'UpdateDate',
            'UpdateUserId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}