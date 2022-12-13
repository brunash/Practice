using System;

public class Kata
    {
        public  static int Opposite(int number)
        {
            if (number < 0)
            {
              return number + (number*2)*(-1);
            } 
            else
            {
              return number - (number*2);
            }              
        }
    }