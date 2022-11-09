using System;
using System.Linq;
using System.Text.RegularExpressions;

public static class Kata
{
    public static string Disemvowel(string str)
    {
        return new Regex(@"[aeiouAEIOU]").Replace(str, "");
    }
}