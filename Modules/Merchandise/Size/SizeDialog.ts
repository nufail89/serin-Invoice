
namespace Indotalent.Merchandise {

    @Serenity.Decorators.registerClass()
    export class SizeDialog extends Serenity.EntityDialog<SizeRow, any> {
        protected getFormKey() { return SizeForm.formKey; }
        protected getIdProperty() { return SizeRow.idProperty; }
        protected getLocalTextPrefix() { return SizeRow.localTextPrefix; }
        protected getNameProperty() { return SizeRow.nameProperty; }
        protected getService() { return SizeService.baseUrl; }
        protected getDeletePermission() { return SizeRow.deletePermission; }
        protected getInsertPermission() { return SizeRow.insertPermission; }
        protected getUpdatePermission() { return SizeRow.updatePermission; }

        protected form = new SizeForm(this.idPrefix);

    }
}