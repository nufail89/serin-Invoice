#pragma checksum "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "451885721ec8e3b32268bb7b44b54bc92fc82c2c"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Modules_Common_Dashboard_DashboardIndex), @"mvc.1.0.view", @"/Modules/Common/Dashboard/DashboardIndex.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"451885721ec8e3b32268bb7b44b54bc92fc82c2c", @"/Modules/Common/Dashboard/DashboardIndex.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"379c0792997c67bfc7f343d9d6c3fed35f906c44", @"/Modules/_ViewImports.cshtml")]
    public class Modules_Common_Dashboard_DashboardIndex : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Indotalent.Common.DashboardPageModel>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/Sales/SalesOrder"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("small-box-footer"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/Purchase/PurchaseOrder"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 3 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml"
  
    ViewData["Title"] = "Dashboard";
    ViewData["PageId"] = "Dashboard";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n");
            DefineSection("Head", async() => {
                WriteLiteral("\r\n");
#nullable restore
#line 9 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml"
Write(Html.StyleBundle("Pages/Dashboard"));

#line default
#line hidden
#nullable disable
                WriteLiteral("\r\n");
#nullable restore
#line 10 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml"
Write(Html.ScriptBundle("Pages/Dashboard"));

#line default
#line hidden
#nullable disable
                WriteLiteral("\r\n");
            }
            );
            WriteLiteral("\r\n");
            DefineSection("ContentHeader", async() => {
                WriteLiteral("\r\n    <h1>");
#nullable restore
#line 14 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml"
   Write(Localizer.Get("Navigation.Dashboard"));

#line default
#line hidden
#nullable disable
                WriteLiteral("</h1>\r\n");
            }
            );
            WriteLiteral(@"
<style>
.s-dashboard-card, .s-dashboard-card-sm {
    margin-bottom: var(--bs-gutter-x);
}

.s-dashboard-card .card-header {
    padding: 1rem;
    border-bottom: none;
    background-color: transparent;
}

.s-dashboard-card .card-body {
    border-radius: 0 0 4px 4px;
    padding: 1rem;
}

.s-dashboard-card .card-footer {
    border-top-color: transparent;
    background-color: transparent;
    padding: 1rem;
}

.s-dashboard-card .card-title {
    margin: 0;
    font-size: 1.4rem;
    color: var(--s-table-title);
}

.s-dashboard-card-sm .card-body {
    padding: 1rem;
    border-radius: 4px 4px 0 0;
    margin: 1px;
}

.s-dashboard-card-sm .card-footer {
    color: rgba(var(--s-bright-rgb), 0.8);
    background-color: var(--bs-body-bg);
    border-radius: 0 0 4px 4px;
    border-top: none;
    margin: 0 1px 1px 1px;
    padding: 3px 0;
    text-align: center;
    text-decoration: none;
}

.s-dashboard-card-sm h3 {
    font-size: 38px;
    font-weight: bold;
 ");
            WriteLiteral(@"   margin: 0 0 10px 0;
    white-space: nowrap;
    padding: 0;
}

.s-dashboard-card-sm p {
    font-size: 15px;
}

.s-dashboard-card-sm p > small {
    display: block;
    font-size: 13px;
    margin-top: 5px;
}

.s-dashboard-card-sm .icon {
    transition: all 0.3s linear;
    position: absolute;
    top: 13px;
    color: #fff;
    opacity: 0.9;
    right: 10px;
    font-size: 64px;
}
.small-box-footer {
  position: relative;
  text-align: center;
  padding: 3px 0;
  color: #fff;
  color: rgba(255, 255, 255, 0.8);
  display: block;
  z-index: 10;
  background: rgba(0, 0, 0, 0.1);
  text-decoration: none;
}
.small-box-footer:hover {
  color: #fff;
  background: rgba(0, 0, 0, 0.15);
}

.bg-world-map {
    background: #3c8dbc;
}

.bg-G-purple {
    background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9);

}
.bg-G-orange {
    background: linear-gradient(to right, #F27121, #E94057, #8A2387);

}

.s-dashboard-card-sm:hover .icon {
    font-size: 70px");
            WriteLiteral(";\r\n}\r\n</style>\r\n\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-lg-4 col-sm-6\">\r\n        <div class=\"card s-dashboard-card-sm bg-primary text-white\">\r\n            <div class=\"card-body\">\r\n                <h3>");
#nullable restore
#line 128 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml"
               Write(Model.CurrentMonthSales.Amount.ToString("##,##,00"));

#line default
#line hidden
#nullable disable
            WriteLiteral("</h3>\r\n                <p>Sales Order (");
#nullable restore
#line 129 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml"
                           Write(Model.Currency);

#line default
#line hidden
#nullable disable
            WriteLiteral(")</p>\r\n            </div>\r\n            <div class=\"icon\">\r\n                <i class=\"fa fa-shopping-bag\"></i>\r\n            </div>\r\n            ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "451885721ec8e3b32268bb7b44b54bc92fc82c2c9125", async() => {
                WriteLiteral("More info <i class=\"fa fa-arrow-circle-right\"></i>");
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-4 col-sm-6\">\r\n        <div class=\"card s-dashboard-card-sm s-alt bg-info text-white\">\r\n            <div class=\"card-body\">\r\n                <h3>");
#nullable restore
#line 140 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml"
               Write(Model.CurrentMonthPurchase.Amount.ToString("##,##,00"));

#line default
#line hidden
#nullable disable
            WriteLiteral("</h3>\r\n                <p>Purchase Order (");
#nullable restore
#line 141 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml"
                              Write(Model.Currency);

#line default
#line hidden
#nullable disable
            WriteLiteral(")</p>\r\n            </div>\r\n            <div class=\"icon\">\r\n                <i class=\"fa fa-shopping-cart\"></i>\r\n            </div>\r\n            ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "451885721ec8e3b32268bb7b44b54bc92fc82c2c11257", async() => {
                WriteLiteral("More info <i class=\"fa fa-arrow-circle-right\"></i>");
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-4 col-sm-6\">\r\n        <div class=\"card s-dashboard-card-sm bg-warning text-white\">\r\n            <div class=\"card-body\">\r\n                <h3>");
#nullable restore
#line 152 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml"
               Write(Model.CurrentMonthMargin.Amount.ToString("##,##,00"));

#line default
#line hidden
#nullable disable
            WriteLiteral("</h3>\r\n                <p>Margin (");
#nullable restore
#line 153 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml"
                      Write(Model.Currency);

#line default
#line hidden
#nullable disable
            WriteLiteral(@")</p>
            </div>
            <div class=""icon"">
                <i class=""fa fa-percent""></i>
            </div>
            <a href=""#"" class=""small-box-footer"">#</a>
        </div>
    </div>
</div>

<div class=""row"">
	<div class=""col-lg-6"">
		<div class=""small-box text-center .bg-G-white"">
			<div class=""inner"">
				<input type=""text"" class=""knob"" data-readonly=""true""");
            BeginWriteAttribute("value", " value=\"", 4221, "\"", 4264, 1);
#nullable restore
#line 167 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml"
WriteAttributeValue("", 4229, Model.CurrentMonthSalesTransaction, 4229, 35, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" data-width=\"200\" data-height=\"200\" data-fgColor=\"#ffffff\" data-linecap=\"round\" data-bgColor=\"rgba(66, 20, 62, 0.46)\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"icon\">\r\n\t\t\t\t<i class=\"ion ion-person-add\"></i>\r\n\t\t\t</div>\r\n\t\t\t");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "451885721ec8e3b32268bb7b44b54bc92fc82c2c14270", async() => {
                WriteLiteral("Sales Transaction <i class=\"fa fa-arrow-circle-right\"></i>");
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-lg-6\">\r\n\t\t<div class=\"small-box text-center .bg-G-white\">\r\n\t\t\t<div class=\"inner\">\r\n\t\t\t\t<input type=\"text\" class=\"knob\" data-readonly=\"true\"");
            BeginWriteAttribute("value", " value=\"", 4766, "\"", 4812, 1);
#nullable restore
#line 178 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml"
WriteAttributeValue("", 4774, Model.CurrentMonthPurchaseTransaction, 4774, 38, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" data-width=\"200\" data-height=\"200\" data-fgColor=\"#ffffff\" data-linecap=\"round\" data-bgColor=\"rgba(66, 20, 62, 0.46)\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"icon\">\r\n\t\t\t\t<i class=\"ion ion-person-add\"></i>\r\n\t\t\t</div>\r\n\t\t\t");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "451885721ec8e3b32268bb7b44b54bc92fc82c2c16321", async() => {
                WriteLiteral("Purchase Transaction <i class=\"fa fa-arrow-circle-right\"></i>");
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"row\">\r\n    <section class=\"col-lg-6\">\r\n        <div class=\"card s-dashboard-card bg-success\">\r\n            <div class=\"card-header d-flex\">\r\n                <h3 class=\"card-title text-white\">Sales Graph (");
#nullable restore
#line 191 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml"
                                                          Write(Model.Currency);

#line default
#line hidden
#nullable disable
            WriteLiteral(")</h3>\r\n            </div>\r\n            <div class=\"card-body text-white\">\r\n");
            WriteLiteral(@"                <div class=""chart"" id=""purchase-chartzzzzzzz"" style=""height: 250px;""></div>
            </div>
            <div class=""card-footer bg-light no-border"">
                <div class=""row"">
                    <div class=""col-4 text-center"" style=""border-right: 1px solid #f4f4f4"">
                        <input type=""text"" class=""knob"" data-readonly=""true""");
            BeginWriteAttribute("value", " value=\"", 5941, "\"", 5974, 1);
#nullable restore
#line 200 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml"
WriteAttributeValue("", 5949, Model.PurchaseKPI1.Value, 5949, 25, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" data-width=\"60\" data-height=\"60\" data-fgColor=\"#39a0ff\" data-bgColor=\"#39a0ff50\">\r\n                        <div class=\"knob-label\">");
#nullable restore
#line 201 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml"
                                           Write(Model.PurchaseKPI1.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("</div>\r\n                    </div>\r\n                    <div class=\"col-4 text-center\" style=\"border-right: 1px solid #f4f4f4\">\r\n                        <input type=\"text\" class=\"knob\" data-readonly=\"true\"");
            BeginWriteAttribute("value", " value=\"", 6336, "\"", 6369, 1);
#nullable restore
#line 204 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml"
WriteAttributeValue("", 6344, Model.PurchaseKPI2.Value, 6344, 25, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" data-width=\"60\" data-height=\"60\" data-fgColor=\"#39a0ff\" data-bgColor=\"#39a0ff50\">\r\n                        <div class=\"knob-label\">");
#nullable restore
#line 205 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml"
                                           Write(Model.PurchaseKPI2.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("</div>\r\n                    </div>\r\n                    <div class=\"col-4 text-center\">\r\n                        <input type=\"text\" class=\"knob\" data-readonly=\"true\"");
            BeginWriteAttribute("value", " value=\"", 6691, "\"", 6724, 1);
#nullable restore
#line 208 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml"
WriteAttributeValue("", 6699, Model.PurchaseKPI3.Value, 6699, 25, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" data-width=\"60\" data-height=\"60\" data-fgColor=\"#39a0ff\" data-bgColor=\"#39a0ff50\">\r\n                        <div class=\"knob-label\">");
#nullable restore
#line 209 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml"
                                           Write(Model.PurchaseKPI3.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral(@"</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class=""col-lg-6"">
        <div class=""card s-dashboard-card bg-primary"">
            <div class=""card-header d-flex"">
                <h3 class=""card-title text-white"">Purchase Graph (");
#nullable restore
#line 218 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml"
                                                             Write(Model.Currency);

#line default
#line hidden
#nullable disable
            WriteLiteral(")</h3>\r\n            </div>\r\n            <div class=\"card-body text-white\">\r\n");
            WriteLiteral(@"                <div class=""chart"" id=""sales-chart"" style=""height: 250px;""></div>
            </div>
            <div class=""card-footer bg-light no-border"">
                <div class=""row"">
                    <div class=""col-4 text-center"" style=""border-right: 1px solid #f4f4f4"">
                        <input type=""text"" class=""knob"" data-readonly=""true""");
            BeginWriteAttribute("value", " value=\"", 7730, "\"", 7760, 1);
#nullable restore
#line 227 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml"
WriteAttributeValue("", 7738, Model.SalesKPI1.Value, 7738, 22, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" data-width=\"60\" data-height=\"60\" data-fgColor=\"#39a0ff\" data-bgColor=\"#39a0ff50\">\r\n                        <div class=\"knob-label\">");
#nullable restore
#line 228 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml"
                                           Write(Model.SalesKPI1.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("</div>\r\n                    </div>\r\n                    <div class=\"col-4 text-center\" style=\"border-right: 1px solid #f4f4f4\">\r\n                        <input type=\"text\" class=\"knob\" data-readonly=\"true\"");
            BeginWriteAttribute("value", " value=\"", 8119, "\"", 8149, 1);
#nullable restore
#line 231 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml"
WriteAttributeValue("", 8127, Model.SalesKPI2.Value, 8127, 22, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" data-width=\"60\" data-height=\"60\" data-fgColor=\"#39a0ff\" data-bgColor=\"#39a0ff50\">\r\n                        <div class=\"knob-label\">");
#nullable restore
#line 232 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml"
                                           Write(Model.SalesKPI2.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("</div>\r\n                    </div>\r\n                    <div class=\"col-4 text-center\">\r\n                        <input type=\"text\" class=\"knob\" data-readonly=\"true\"");
            BeginWriteAttribute("value", " value=\"", 8468, "\"", 8498, 1);
#nullable restore
#line 235 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml"
WriteAttributeValue("", 8476, Model.SalesKPI3.Value, 8476, 22, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" data-width=\"60\" data-height=\"60\" data-fgColor=\"#39a0ff\" data-bgColor=\"#39a0ff50\">\r\n                        <div class=\"knob-label\">");
#nullable restore
#line 236 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml"
                                           Write(Model.SalesKPI3.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n");
            WriteLiteral(@"</div>

<script>

    $(function () {

        
        $('.daterange').daterangepicker({
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
            startDate: moment().subtract(29, 'days'),
            endDate: moment()
        }, function (start, end) {
            window.alert(""You chose: "" + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        });

        $("".knob"").knob();

        var purchaseChart = new Morris.Line({
		element: 'purchase-chartzzzzzzz',
		resize: true,
		data: ");
#nullable restore
#line 343 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml"
          Write(Html.Raw(Json.Serialize(Model.PurchaseGraph)));

#line default
#line hidden
#nullable disable
            WriteLiteral(",\r\n\t\txkey: \'Month\',\r\n\t\tykeys: [\'Amount\'],\r\n\t\tlabels: [\'Amount (");
#nullable restore
#line 346 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml"
                     Write(Model.Currency);

#line default
#line hidden
#nullable disable
            WriteLiteral(@")'],
		lineColors: ['#efefef'],
		lineWidth: 2,
		hideHover: 'auto',
		gridTextColor: ""#fff"",
		gridStrokeWidth: 0.4,
		pointSize: 4,
		pointStrokeColors: [""#efefef""],
		gridLineColor: ""#efefef"",
		gridTextFamily: ""Open Sans"",
		gridTextSize: 10
	  });


	  var salesChart = new Morris.Line({
		element: 'sales-chart',
		resize: true,
		data: ");
#nullable restore
#line 363 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml"
          Write(Html.Raw(Json.Serialize(Model.SalesGraph)));

#line default
#line hidden
#nullable disable
            WriteLiteral(",\r\n\t\txkey: \'Month\',\r\n\t\tykeys: [\'Amount\'],\r\n\t\tlabels: [\'Amount (");
#nullable restore
#line 366 "/home/nufail/Projects/Kel3/Kel3/Indotalent.Web/Modules/Common/Dashboard/DashboardIndex.cshtml"
                     Write(Model.Currency);

#line default
#line hidden
#nullable disable
            WriteLiteral(@")'],
		lineColors: ['#efefef'],
		lineWidth: 2,
		hideHover: 'auto',
		gridTextColor: ""#fff"",
		gridStrokeWidth: 0.4,
		pointSize: 4,
		pointStrokeColors: [""#efefef""],
		gridLineColor: ""#efefef"",
		gridTextFamily: ""Open Sans"",
		gridTextSize: 10
	  });
            

        var sparklineOpt = {
            type: 'bar',
            barColor: ""#f0f0f0"",
            barWidth: 6,
            barSpacing: 2,
            height: '40'
        }

        $('#sparkline-1').sparkline([1000, 1200, 920, 927, 931, 1027, 819, 930, 1021], sparklineOpt);
        $('#sparkline-2').sparkline([515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921], sparklineOpt);
        $('#sparkline-3').sparkline([15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21], sparklineOpt);

        $('.s-dashboard-card ul.nav a').on('shown.bs.tab', function () {
            salesByQuarterChart.update();
            salesByTypeChart.update();
        });
    });
</script>");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public Serenity.ITextLocalizer Localizer { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Indotalent.Common.DashboardPageModel> Html { get; private set; }
    }
}
#pragma warning restore 1591
