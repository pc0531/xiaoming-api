package com.xiaoming.common;

public interface AppConstants {
    int SECOND = 1;
    int MILLI = 1;
    int MINUTE = 60 * SECOND;
    int HOUR = 60 * MINUTE;
    int DAY = 24 * HOUR;

    int SECOND_OF_MILLI = 1000 * MILLI;
    int MINUTE_OF_MILLI = 60 * SECOND_OF_MILLI;
    int HOUR_OF_MILLI = 60 * MINUTE_OF_MILLI;

    final String JWT_SECRET = "qmkey";
}
