namespace Solution
{
    using System;
    using System.Linq;
    public static class Program
    {
        public static string repeatStr(int n, string s)
        {
            return String.Concat(Enumerable.Repeat(s, n));
        }
    }
}