
namespace Indotalent.Purchase {
    export interface BillPaymentForm {
        BillId: Serenity.IntegerEditor;
        Number: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        ProcurementGroup: Serenity.StringEditor;
        PaymentDate: Serenity.DateEditor;
        CashBankId: Serenity.IntegerEditor;
        BillAmount: Serenity.DecimalEditor;
        PaymentAmount: Serenity.DecimalEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }

    export class BillPaymentForm extends Serenity.PrefixedContext {
        static formKey = 'Purchase.BillPayment';
    }

    [,
        ['BillId', () => Serenity.IntegerEditor],
        ['Number', () => Serenity.StringEditor],
        ['Description', () => Serenity.StringEditor],
        ['ProcurementGroup', () => Serenity.StringEditor],
        ['PaymentDate', () => Serenity.DateEditor],
        ['CashBankId', () => Serenity.IntegerEditor],
        ['BillAmount', () => Serenity.DecimalEditor],
        ['PaymentAmount', () => Serenity.DecimalEditor],
        ['InsertDate', () => Serenity.DateEditor],
        ['InsertUserId', () => Serenity.IntegerEditor],
        ['UpdateDate', () => Serenity.DateEditor],
        ['UpdateUserId', () => Serenity.IntegerEditor],
        ['TenantId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(BillPaymentForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}