let str = "code";
str.toUpperCase();

// Don't actually do this, but this is basically what's happening.
Object(str).toUpperCase();
