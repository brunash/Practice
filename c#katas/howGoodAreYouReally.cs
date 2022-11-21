using System;
using System.Linq;

public class Kata
{
    public static bool BetterThanAverage(int[] ClassPoints, int YourPoints)
    {
        int average = ClassPoints.Sum() / ClassPoints.Length;
        if (YourPoints > average)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}