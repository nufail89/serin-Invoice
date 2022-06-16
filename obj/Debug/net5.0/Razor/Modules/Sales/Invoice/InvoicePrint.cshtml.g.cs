#pragma checksum "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "91236099efec0e4244fff8a84f6e99f1e540693c"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Modules_Sales_Invoice_InvoicePrint), @"mvc.1.0.view", @"/Modules/Sales/Invoice/InvoicePrint.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/_ViewImports.cshtml"
using Serenity;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/_ViewImports.cshtml"
using Serenity.Web;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/_ViewImports.cshtml"
using Indotalent;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/_ViewImports.cshtml"
using Microsoft.AspNetCore.Html;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/_ViewImports.cshtml"
using System.Text;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"91236099efec0e4244fff8a84f6e99f1e540693c", @"/Modules/Sales/Invoice/InvoicePrint.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"379c0792997c67bfc7f343d9d6c3fed35f906c44", @"/Modules/_ViewImports.cshtml")]
    public class Modules_Sales_Invoice_InvoicePrint : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Indotalent.Sales.InvoicePrintData>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 3 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
 if ((bool?)ViewData["Printing"] == true)
{
    Layout = "_LayoutNoNavigation";
}

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<section class=\"invoice\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <h2 class=\"page-header\">\r\n                INVOICE\r\n                <small class=\"pull-right\">Print at: ");
#nullable restore
#line 13 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
                                               Write(DateTime.Now.ToShortDateString());

#line default
#line hidden
#nullable disable
            WriteLiteral("</small>\r\n            </h2>\r\n        </div>\r\n    </div>\r\n    <!-- info row -->\r\n    <div class=\"row invoice-info\">\r\n        <div class=\"col-sm-4 invoice-col\">\r\n            From\r\n            <address>\r\n                <strong>");
#nullable restore
#line 22 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
                   Write(Model.Company.TenantName);

#line default
#line hidden
#nullable disable
            WriteLiteral("</strong><br>\r\n                ");
#nullable restore
#line 23 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
           Write(Model.Company.Street);

#line default
#line hidden
#nullable disable
            WriteLiteral("<br>\r\n                ");
#nullable restore
#line 24 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
           Write(Model.Company.City);

#line default
#line hidden
#nullable disable
            WriteLiteral(" ");
#nullable restore
#line 24 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
                               Write(Model.Company.State);

#line default
#line hidden
#nullable disable
            WriteLiteral(" ");
#nullable restore
#line 24 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
                                                    Write(Model.Company.ZipCode);

#line default
#line hidden
#nullable disable
            WriteLiteral("<br>\r\n                Phone: ");
#nullable restore
#line 25 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
                  Write(Model.Company.Phone);

#line default
#line hidden
#nullable disable
            WriteLiteral("<br>\r\n                Email: ");
#nullable restore
#line 26 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
                  Write(Model.Company.Email);

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </address>\r\n        </div>\r\n        <!-- /.col -->\r\n        <div class=\"col-sm-4 invoice-col\">\r\n            To\r\n            <address>\r\n                <strong>");
#nullable restore
#line 33 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
                   Write(Model.Customer.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("</strong><br>\r\n                ");
#nullable restore
#line 34 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
           Write(Model.Customer.Street);

#line default
#line hidden
#nullable disable
            WriteLiteral("<br>\r\n                ");
#nullable restore
#line 35 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
           Write(Model.Customer.City);

#line default
#line hidden
#nullable disable
            WriteLiteral(" ");
#nullable restore
#line 35 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
                                Write(Model.Customer.State);

#line default
#line hidden
#nullable disable
            WriteLiteral(" ");
#nullable restore
#line 35 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
                                                      Write(Model.Customer.ZipCode);

#line default
#line hidden
#nullable disable
            WriteLiteral("<br>\r\n                Phone: ");
#nullable restore
#line 36 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
                  Write(Model.Customer.Phone);

#line default
#line hidden
#nullable disable
            WriteLiteral("<br>\r\n                Email: ");
#nullable restore
#line 37 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
                  Write(Model.Customer.Email);

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </address>\r\n        </div>\r\n        <!-- /.col -->\r\n        <div class=\"col-sm-4 invoice-col\">\r\n            Invoice Number:<br>\r\n            ");
#nullable restore
#line 43 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
       Write(Model.Header.Number);

#line default
#line hidden
#nullable disable
            WriteLiteral("<br>\r\n            Invoice Date:<br>\r\n            ");
#nullable restore
#line 45 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
       Write(Model.Header.InvoiceDate.Value.ToShortDateString());

#line default
#line hidden
#nullable disable
            WriteLiteral("<br>\r\n            Amount Invoice:<br>\r\n            ");
#nullable restore
#line 47 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
       Write(Model.Company.Currency);

#line default
#line hidden
#nullable disable
            WriteLiteral(" ");
#nullable restore
#line 47 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
                               Write(Model.Header.Total.Value.ToString("#,##0.00"));

#line default
#line hidden
#nullable disable
            WriteLiteral("<br>\r\n            Order Number:<br>\r\n            ");
#nullable restore
#line 49 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
       Write(Model.Header.SalesOrderNumber);

#line default
#line hidden
#nullable disable
            WriteLiteral(@"<br>
        </div>
        <!-- /.col -->
    </div>
    <!-- /.row -->
    <!-- Table row -->
    <div class=""row"">
        <div class=""col-xs-12 table-responsive"">
            <table class=""table table-striped"">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>SubTotal</th>
                        <th>Discount</th>
                        <th>BeforeTax</th>
                        <th>TaxAmt</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
");
#nullable restore
#line 71 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
                     foreach (var d in Model.Details)
                    {

#line default
#line hidden
#nullable disable
            WriteLiteral("                        <tr>\r\n                            <td>");
#nullable restore
#line 74 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
                           Write(d.ProductName);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                            <td>");
#nullable restore
#line 75 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
                            Write(d.Price.ToStringDefault("#,##0.00"));

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                            <td>");
#nullable restore
#line 76 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
                            Write(d.Qty.ToStringDefault());

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                            <td>");
#nullable restore
#line 77 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
                            Write(d.SubTotal.ToStringDefault("#,##0.00"));

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                            <td>");
#nullable restore
#line 78 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
                            Write(d.Discount.ToStringDefault("#,##0.00"));

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                            <td>");
#nullable restore
#line 79 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
                            Write(d.BeforeTax.ToStringDefault("#,##0.00"));

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                            <td>");
#nullable restore
#line 80 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
                            Write(d.TaxAmount.ToStringDefault("#,##0.00"));

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                            <td>");
#nullable restore
#line 81 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
                            Write(d.Total.ToStringDefault("#,##0.00"));

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                        </tr>\r\n");
#nullable restore
#line 83 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
                    }

#line default
#line hidden
#nullable disable
            WriteLiteral(@"                </tbody>
            </table>
        </div>
        <!-- /.col -->
    </div>

    <div class=""row"">
        <div class=""col-xs-6"">

        </div>
        <!-- /.col -->
        <div class=""col-xs-6"">
            <p class=""lead"">Summary, in currency ");
#nullable restore
#line 96 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
                                            Write(Model.Company.Currency);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                    <tr>\r\n                        <th style=\"width:50%\">Subtotal:</th>\r\n                        <td>");
#nullable restore
#line 101 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
                       Write(Model.Header.SubTotal.Value.ToString("#,##0.00"));

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th>Discount:</th>\r\n                        <td>");
#nullable restore
#line 105 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
                       Write(Model.Header.Discount.Value.ToString("#,##0.00"));

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th>BeforeTax:</th>\r\n                        <td>");
#nullable restore
#line 109 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
                       Write(Model.Header.BeforeTax.Value.ToString("#,##0.00"));

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th>TaxAmount:</th>\r\n                        <td>");
#nullable restore
#line 113 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
                       Write(Model.Header.TaxAmount.Value.ToString("#,##0.00"));

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th>OtherCharges:</th>\r\n                        <td>");
#nullable restore
#line 117 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
                       Write(Model.Header.OtherCharge.Value.ToString("#,##0.00"));

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th>Total:</th>\r\n                        <td>");
#nullable restore
#line 121 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Sales/Invoice/InvoicePrint.cshtml"
                       Write(Model.Header.Total.Value.ToString("#,##0.00"));

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Indotalent.Sales.InvoicePrintData> Html { get; private set; }
    }
}
#pragma warning restore 1591