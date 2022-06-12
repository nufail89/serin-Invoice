
namespace Indotalent.Settings {
    export interface CashBankForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        AccountNumber: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }

    export class CashBankForm extends Serenity.PrefixedContext {
        static formKey = 'Settings.CashBank';
    }

    [,
        ['Name', () => Serenity.StringEditor],
        ['Description', () => Serenity.StringEditor],
        ['AccountNumber', () => Serenity.StringEditor],
        ['Street', () => Serenity.StringEditor],
        ['City', () => Serenity.StringEditor],
        ['State', () => Serenity.StringEditor],
        ['ZipCode', () => Serenity.StringEditor],
        ['Phone', () => Serenity.StringEditor],
        ['Email', () => Serenity.StringEditor],
        ['InsertDate', () => Serenity.DateEditor],
        ['InsertUserId', () => Serenity.IntegerEditor],
        ['UpdateDate', () => Serenity.DateEditor],
        ['UpdateUserId', () => Serenity.IntegerEditor],
        ['TenantId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(CashBankForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}