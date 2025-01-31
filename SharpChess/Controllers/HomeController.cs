using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using SharpChess.Models.ViewModels;

namespace SharpChess.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        ViewData["Title"] = "Game";

        return View();
    }

    public IActionResult Privacy()
    {
        ViewData["Title"] = "Privacy";
        return View();
    }

    public IActionResult Test()
    {
        ViewData["Title"] = "Testing";
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
