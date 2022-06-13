using Serenity.Navigation;
using MyPages = Indotalent.Purchase.Pages;


[assembly: NavigationMenu(6900, "Purchase", icon: "fa-shopping-bag")]
[assembly: NavigationLink(6900, "Purchase/Vendor", typeof(MyPages.VendorController), icon: "fa-list")]
[assembly: NavigationLink(6900, "Purchase/Purchase Order", typeof(MyPages.PurchaseOrderController), "fa-list")]
[assembly: NavigationLink(6900, "Purchase/Bill", typeof(MyPages.BillController), icon: "fa-list")]
[assembly: NavigationLink(6900, "Purchase/Bill Payment", typeof(MyPages.BillPaymentController), "fa-list")]