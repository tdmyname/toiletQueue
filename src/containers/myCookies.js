/**
 * Created by TANDONG on 2017/1/16.
 * 对cookie的操作
 */
//取cookie
export function getCookies(cname) {
    if (document.cookie.length > 0) {
        let cStart = document.cookie.indexOf(cname + "=")
        if (cStart != -1) {
            cStart = cStart + cname.length + 1
            let c_end = document.cookie.indexOf(";", cStart)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(cStart, c_end))
        }
    }
    return ""
}
//存cookie
export function setCookies(cname, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = cname + "=" + escape(value) +
        ((expiredays == null) ? "" : "; expires=" + exdate.toGMTString()) + ";path=/"
}