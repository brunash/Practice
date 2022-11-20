using System;

public class Kata
{
    public static int SquareDigits(int n)
    {
        var val = n.ToString();

        var result = "";

        for (var i = 0; i < val.Length; i++)
        {
            char c = val[i];
            int num = int.Parse(c.ToString());
            result += (num * num);
        }
        return int.Parse(result);

    }
}