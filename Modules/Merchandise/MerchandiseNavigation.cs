﻿using Serenity.Navigation;
using MyPages = Indotalent.Merchandise.Pages;

[assembly: NavigationMenu(7900, "Merchandise", icon: "fa-th")]
[assembly: NavigationLink(7900, "Merchandise/Uom", typeof(MyPages.UomController), icon: "fa-list")]
[assembly: NavigationLink(7900, "Merchandise/Size", typeof(MyPages.SizeController), icon: "fa-list")]
[assembly: NavigationLink(7900, "Merchandise/Colour", typeof(MyPages.ColourController), icon: "fa-list")]
[assembly: NavigationLink(7900, "Merchandise/Flavour", typeof(MyPages.FlavourController), icon: "fa-list")]
[assembly: NavigationLink(7900, "Merchandise/Brand", typeof(MyPages.BrandController), icon: "fa-list")]
[assembly: NavigationLink(7900, "Merchandise/Category", typeof(MyPages.CategoryController), icon: "fa-list")]
[assembly: NavigationLink(7900, "Merchandise/Product", typeof(MyPages.ProductController), icon: "fa-list")]