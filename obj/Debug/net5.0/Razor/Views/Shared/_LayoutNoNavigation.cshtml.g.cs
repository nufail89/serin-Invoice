#pragma checksum "C:\Users\Server\Documents\GitHub\serin-Invoice\Views\Shared\_LayoutNoNavigation.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "d50a182df89f67cb4217c44a8b2a3725444b614b"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Shared__LayoutNoNavigation), @"mvc.1.0.view", @"/Views/Shared/_LayoutNoNavigation.cshtml")]
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
#line 1 "C:\Users\Server\Documents\GitHub\serin-Invoice\Views\_ViewImports.cshtml"
using Serenity;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\Server\Documents\GitHub\serin-Invoice\Views\_ViewImports.cshtml"
using Serenity.Web;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "C:\Users\Server\Documents\GitHub\serin-Invoice\Views\_ViewImports.cshtml"
using Indotalent;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "C:\Users\Server\Documents\GitHub\serin-Invoice\Views\_ViewImports.cshtml"
using Microsoft.AspNetCore.Html;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"d50a182df89f67cb4217c44a8b2a3725444b614b", @"/Views/Shared/_LayoutNoNavigation.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"902827d219393a93dff8ca117305035f8258bfef", @"/Views/_ViewImports.cshtml")]
    public class Views_Shared__LayoutNoNavigation : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
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
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.PartialTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("<!DOCTYPE html>\r\n");
#nullable restore
#line 2 "C:\Users\Server\Documents\GitHub\serin-Invoice\Views\Shared\_LayoutNoNavigation.cshtml"
  
var themeCookie = Context.Request.Cookies["ProThemeSelection"];
var theme = themeCookie != null && !themeCookie.IsEmptyOrNull() ? themeCookie : "azure-light";
var rtl = System.Globalization.CultureInfo.CurrentUICulture.TextInfo.IsRightToLeft;

#line default
#line hidden
#nullable disable
            WriteLiteral("<html");
            BeginWriteAttribute("lang", " lang=\"", 275, "\"", 337, 1);
#nullable restore
#line 7 "C:\Users\Server\Documents\GitHub\serin-Invoice\Views\Shared\_LayoutNoNavigation.cshtml"
WriteAttributeValue("", 282, System.Globalization.CultureInfo.CurrentUICulture.Name, 282, 55, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            BeginWriteAttribute("class", " class=\"", 338, "\"", 416, 5);
            WriteAttributeValue("", 346, "pro", 346, 3, true);
            WriteAttributeValue(" ", 349, "theme-", 350, 7, true);
#nullable restore
#line 7 "C:\Users\Server\Documents\GitHub\serin-Invoice\Views\Shared\_LayoutNoNavigation.cshtml"
WriteAttributeValue("", 356, theme, 356, 8, false);

#line default
#line hidden
#nullable disable
            WriteAttributeValue(" ", 364, "no-navigation", 365, 14, true);
#nullable restore
#line 7 "C:\Users\Server\Documents\GitHub\serin-Invoice\Views\Shared\_LayoutNoNavigation.cshtml"
WriteAttributeValue("", 378, Html.Raw(rtl ? " dir=\"rtl\"" : ""), 378, 38, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "d50a182df89f67cb4217c44a8b2a3725444b614b5423", async() => {
                WriteLiteral("\r\n    ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("partial", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "d50a182df89f67cb4217c44a8b2a3725444b614b5685", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.PartialTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper);
                BeginWriteTagHelperAttribute();
#nullable restore
#line 9 "C:\Users\Server\Documents\GitHub\serin-Invoice\Views\Shared\_LayoutNoNavigation.cshtml"
       WriteLiteral(MVC.Views.Shared._LayoutHead);

#line default
#line hidden
#nullable disable
                __tagHelperStringValueBuffer = EndWriteTagHelperAttribute();
                __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper.Name = __tagHelperStringValueBuffer;
                __tagHelperExecutionContext.AddTagHelperAttribute("name", __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper.Name, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n    ");
#nullable restore
#line 10 "C:\Users\Server\Documents\GitHub\serin-Invoice\Views\Shared\_LayoutNoNavigation.cshtml"
Write(RenderSection("Head", false));

#line default
#line hidden
#nullable disable
                WriteLiteral("\r\n    <title>");
#nullable restore
#line 11 "C:\Users\Server\Documents\GitHub\serin-Invoice\Views\Shared\_LayoutNoNavigation.cshtml"
      Write(ViewData["Title"]);

#line default
#line hidden
#nullable disable
                WriteLiteral("</title>\r\n");
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "d50a182df89f67cb4217c44a8b2a3725444b614b8544", async() => {
                WriteLiteral("\r\n    ");
#nullable restore
#line 14 "C:\Users\Server\Documents\GitHub\serin-Invoice\Views\Shared\_LayoutNoNavigation.cshtml"
Write(RenderBody());

#line default
#line hidden
#nullable disable
                WriteLiteral("\r\n");
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            BeginAddHtmlAttributeValues(__tagHelperExecutionContext, "id", 3, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            AddHtmlAttributeValue("", 575, "s-", 575, 2, true);
#nullable restore
#line 13 "C:\Users\Server\Documents\GitHub\serin-Invoice\Views\Shared\_LayoutNoNavigation.cshtml"
AddHtmlAttributeValue("", 577, ViewData["PageId"], 577, 21, false);

#line default
#line hidden
#nullable disable
            AddHtmlAttributeValue("", 598, "Page", 598, 4, true);
            EndAddHtmlAttributeValues(__tagHelperExecutionContext);
            BeginAddHtmlAttributeValues(__tagHelperExecutionContext, "class", 3, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
#nullable restore
#line 13 "C:\Users\Server\Documents\GitHub\serin-Invoice\Views\Shared\_LayoutNoNavigation.cshtml"
AddHtmlAttributeValue("", 611, ViewData["BodyClass"], 611, 24, false);

#line default
#line hidden
#nullable disable
            AddHtmlAttributeValue(" ", 635, "no-navigation", 636, 14, true);
#nullable restore
#line 13 "C:\Users\Server\Documents\GitHub\serin-Invoice\Views\Shared\_LayoutNoNavigation.cshtml"
AddHtmlAttributeValue("", 649, rtl ? " rtl" : "", 649, 20, false);

#line default
#line hidden
#nullable disable
            EndAddHtmlAttributeValues(__tagHelperExecutionContext);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n</html>");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
