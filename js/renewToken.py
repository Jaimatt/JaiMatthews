import base64

# this code is just to renew the thingy.

# first we get the insta.js file and get the old token

f = open("insta.js")
oldToken = f.readlines()[72]
print(oldToken)

# now we decode it

oldToken = base64.b64decode(oldToken.encode("utf-8"))
oldToken = oldToken.decode("utf-8")
print(oldToken)

# then, we renew it.

url = "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=" + oldToken
