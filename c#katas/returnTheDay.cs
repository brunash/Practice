using System;
using System.Collections.Generic;
using System.Linq;

public class Kata
{
    public static string WhatDay(int n)
    {
        if (n == 1)
        {
            return "Sunday";
        }
        if (n == 2)
        {
            return "Monday";
        }
        if (n == 3)
        {
            return "Tuesday";
        }
        if (n == 4)
        {
            return "Wednesday";
        }
        if (n == 5)
        {
            return "Thursday";
        }
        if (n == 6)
        {
            return "Friday";
        }
        if (n == 7)
        {
            return "Saturday";
        }
        else
        {
            return "Wrong, please enter a number between 1 and 7";
        }
    }
}