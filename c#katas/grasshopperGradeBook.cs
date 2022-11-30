using System;

public class Kata
{
    public static char GetGrade(int s1, int s2, int s3)
    {
        char result;
        int score = (s1 + s2 + s3) / 3;
        if (score >= 90 && score <= 100)
        {
            result = 'A';
        }
        else if (score >= 80 && score < 90)
        {
            result = 'B';
        }
        else if (score >= 70 && score < 80)
        {
            result = 'C';
        }
        else if (score >= 60 && score < 70)
        {
            result = 'D';
        }
        else
        {
            result = 'F';
        }
        return result;
    }
}