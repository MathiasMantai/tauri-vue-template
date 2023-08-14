/**
 * handle datetime formats
 */

function dateTimeFormatRouting(countryCode: string) {
    switch(countryCode) {
        case "de":
            return "%d.%m.%Y %H:%M:%S"
        case "en":
            return "%Y-%m-%d %H:%M:%S"
    }
}