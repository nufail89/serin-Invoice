
namespace Indotalent.Settings {
    export interface MyCompanyForm {
        TenantName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Currency: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        ProductNumberPrefix: Serenity.StringEditor;
        ProductNumberUseDate: Serenity.IntegerEditor;
        ProductNumberLength: Serenity.IntegerEditor;
        CustomerNumberPrefix: Serenity.StringEditor;
        CustomerNumberUseDate: Serenity.IntegerEditor;
        CustomerNumberLength: Serenity.IntegerEditor;
        SalesNumberPrefix: Serenity.StringEditor;
        SalesNumberUseDate: Serenity.IntegerEditor;
        SalesNumberLength: Serenity.IntegerEditor;
        InvoiceNumberPrefix: Serenity.StringEditor;
        InvoiceNumberUseDate: Serenity.IntegerEditor;
        InvoiceNumberLength: Serenity.IntegerEditor;
        InvoicePaymentNumberPrefix: Serenity.StringEditor;
        InvoicePaymentNumberUseDate: Serenity.IntegerEditor;
        InvoicePaymentNumberLength: Serenity.IntegerEditor;
        VendorNumberPrefix: Serenity.StringEditor;
        VendorNumberUseDate: Serenity.IntegerEditor;
        VendorNumberLength: Serenity.IntegerEditor;
        PurchaseNumberPrefix: Serenity.StringEditor;
        PurchaseNumberUseDate: Serenity.IntegerEditor;
        PurchaseNumberLength: Serenity.IntegerEditor;
        BillNumberPrefix: Serenity.StringEditor;
        BillNumberUseDate: Serenity.IntegerEditor;
        BillNumberLength: Serenity.IntegerEditor;
        BillPaymentNumberPrefix: Serenity.StringEditor;
        BillPaymentNumberUseDate: Serenity.IntegerEditor;
        BillPaymentNumberLength: Serenity.IntegerEditor;
        MaximumUser: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
    }

    export class MyCompanyForm extends Serenity.PrefixedContext {
        static formKey = 'Settings.MyCompany';
    }

    [,
        ['TenantName', () => Serenity.StringEditor],
        ['Description', () => Serenity.StringEditor],
        ['Currency', () => Serenity.StringEditor],
        ['Street', () => Serenity.StringEditor],
        ['City', () => Serenity.StringEditor],
        ['State', () => Serenity.StringEditor],
        ['ZipCode', () => Serenity.StringEditor],
        ['Phone', () => Serenity.StringEditor],
        ['Email', () => Serenity.StringEditor],
        ['ProductNumberPrefix', () => Serenity.StringEditor],
        ['ProductNumberUseDate', () => Serenity.IntegerEditor],
        ['ProductNumberLength', () => Serenity.IntegerEditor],
        ['CustomerNumberPrefix', () => Serenity.StringEditor],
        ['CustomerNumberUseDate', () => Serenity.IntegerEditor],
        ['CustomerNumberLength', () => Serenity.IntegerEditor],
        ['SalesNumberPrefix', () => Serenity.StringEditor],
        ['SalesNumberUseDate', () => Serenity.IntegerEditor],
        ['SalesNumberLength', () => Serenity.IntegerEditor],
        ['InvoiceNumberPrefix', () => Serenity.StringEditor],
        ['InvoiceNumberUseDate', () => Serenity.IntegerEditor],
        ['InvoiceNumberLength', () => Serenity.IntegerEditor],
        ['InvoicePaymentNumberPrefix', () => Serenity.StringEditor],
        ['InvoicePaymentNumberUseDate', () => Serenity.IntegerEditor],
        ['InvoicePaymentNumberLength', () => Serenity.IntegerEditor],
        ['VendorNumberPrefix', () => Serenity.StringEditor],
        ['VendorNumberUseDate', () => Serenity.IntegerEditor],
        ['VendorNumberLength', () => Serenity.IntegerEditor],
        ['PurchaseNumberPrefix', () => Serenity.StringEditor],
        ['PurchaseNumberUseDate', () => Serenity.IntegerEditor],
        ['PurchaseNumberLength', () => Serenity.IntegerEditor],
        ['BillNumberPrefix', () => Serenity.StringEditor],
        ['BillNumberUseDate', () => Serenity.IntegerEditor],
        ['BillNumberLength', () => Serenity.IntegerEditor],
        ['BillPaymentNumberPrefix', () => Serenity.StringEditor],
        ['BillPaymentNumberUseDate', () => Serenity.IntegerEditor],
        ['BillPaymentNumberLength', () => Serenity.IntegerEditor],
        ['MaximumUser', () => Serenity.IntegerEditor],
        ['InsertDate', () => Serenity.DateEditor],
        ['InsertUserId', () => Serenity.IntegerEditor],
        ['UpdateDate', () => Serenity.DateEditor],
        ['UpdateUserId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(MyCompanyForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}