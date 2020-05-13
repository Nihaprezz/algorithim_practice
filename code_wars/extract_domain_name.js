// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet

function domainName(url){ //using regex we replace url strings we dont want with '' an empty string until we have the domain name at the end.
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0]
 }

 //Examples:

//domainName("http://google.com"), "google");
//domainName("http://google.co.jp"), "google");
//domainName("www.xakep.ru"), "xakep");
//domainName("https://youtube.com"), "youtube");