namespace Indotalent.Membership {

    @Serenity.Decorators.registerClass()
    export class JazzLoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {

        protected getFormKey() { return LoginForm.formKey; }

        constructor(container: JQuery) {
            super(container);

            this.byId('LoginButton').click(e => {
                e.preventDefault();

                if (!this.validateForm()) {
                    return;
                }

                var request = this.getSaveEntity();

                Q.serviceCall({
                    url: Q.resolveUrl('~/Account/Login'),
                    request: request,
                    onSuccess: response => {
                        this.redirectToReturnUrl();
                    },
                    onError: (response: Serenity.ServiceResponse) => {
                        if (response != null && response.Error != null && response.Error.Code == "RedirectUserTo") {
                            window.location.href = response.Error.Arguments;
                            return;
                        }

                        if (response != null && response.Error != null && !Q.isEmptyOrNull(response.Error.Message)) {
                            Q.notifyError(response.Error.Message);
                            $('#Password').focus();

                            return;
                        }

                        Q.ErrorHandling.showServiceError(response.Error);
                    }
                });
            });
        }

        protected redirectToReturnUrl() {
            var q = Q.parseQueryString();
            var returnUrl = q['returnUrl'] || q['ReturnUrl'];
            if (returnUrl) {
                var hash = window.location.hash;
                if (hash != null && hash != '#')
                    returnUrl += hash;
                window.location.href = returnUrl;
            }
            else {
                window.location.href = Q.resolveUrl('~/');
            }
        }

        protected getTemplate() {
            return `
    <div class="s-Form">
        <form id="~_Form" action="">
            <div id="~_PropertyGrid"></div>
            <div class="form-group text-left">
                <div class="checkbox checkbox-fill d-inline">
                    <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" checked="">
                    <label for="checkbox-fill-a1" class="cr"> Save credentials</label>
                </div>
            </div>
            <button id="~_LoginButton" class="btn btn-primary shadow-2 mb-4" type="submit">Login</button>
            <p class="mb-2 text-muted"><a href="${Q.resolveUrl('~/Account/ForgotPassword')}">${Q.text("Forms.Membership.Login.ForgotPassword")}</a></p>
            <p class="mb-0 text-muted"><a href="${Q.resolveUrl('~/Account/SignUp')}">${Q.text("Forms.Membership.Login.SignUpButton")}</a></p>
        </form>
    </div>
`;
        }
    }
}