using System;

namespace Solution
{
    public class SolutionClass
    {
        public static string EvenOrOdd(int number)
        {
            int rem = number % 2;

            if (rem == 0)
            {
                return "Even";
            }
            else
            {
                return "Odd";
            }
        }
    }
}