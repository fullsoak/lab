const texts = [{
  "name": "bool",
  "description": "Return a random boolean value (true or false)",
  "properties": { "likelihood": { "type": "integer" } },
}, {
  "name": "falsy",
  "description":
    'Return a random falsy value (false, null, undefined, 0, NaN, "")',
  "properties": {},
}, {
  "name": "character",
  "description": "Return a random character",
  "properties": {
    "pool": { "type": "string" },
    "alpha": { "type": "boolean" },
    "numeric": { "type": "boolean" },
    "casing": { "type": "string", "values": ["lower", "upper"] },
    "symbols": { "type": "boolean" },
  },
}, {
  "name": "floating",
  "description": "Return a random floating point number",
  "properties": {
    "fixed": { "type": "integer" },
    "min": { "type": "float" },
    "max": { "type": "float" },
  },
}, {
  "name": "integer",
  "description":
    "Return a random integer. range: -9007199254740991 to 9007199254740991",
  "properties": { "min": { "type": "integer" }, "max": { "type": "integer" } },
}, {
  "name": "letter",
  "description": "Return a random letter",
  "properties": {
    "casing": { "type": "string", "values": ["lower", "upper"] },
  },
}, {
  "name": "natural",
  "description": "Return a natural number. range: 0 to 9007199254740991",
  "properties": {
    "min": { "type": "integer" },
    "max": { "type": "integer" },
    "exclude": { "type": "list" },
  },
}, {
  "name": "prime",
  "description": "Return a prime number",
  "properties": { "min": { "type": "integer" }, "max": { "type": "integer" } },
}, {
  "name": "string",
  "description": "Return a random string",
  "properties": {
    "length": { "type": "integer" },
    "pool": { "type": "string" },
    "alpha": { "type": "boolean" },
    "casing": { "type": "string", "values": ["lower", "upper"] },
    "symbols": { "type": "boolean" },
  },
}, {
  "name": "paragraph",
  "description":
    "Return a random paragraph generated from sentences populated by semi-pronounceable random (nonsense) words",
  "properties": { "sentences": { "type": "integer" } },
}, {
  "name": "sentence",
  "description":
    "Return a random sentence populated by semi-pronounceable random (nonsense) words",
  "properties": { "words": { "type": "integer" } },
}, {
  "name": "syllable",
  "description": "Return a semi-speakable syllable, 2 or 3 letters",
  "properties": {},
}, {
  "name": "word",
  "description": "Return a semi-pronounceable random (nonsense) word",
  "properties": {
    "syllables": { "type": "integer" },
    "length": { "type": "integer" },
  },
}, {
  "name": "age",
  "description": "Generate a random age",
  "properties": {
    "type": {
      "type": "string",
      "values": ["child", "teen", "adult", "senior"],
    },
  },
}, {
  "name": "birthday",
  "description": "Generate a random birthday",
  "properties": {
    "type": {
      "type": "string",
      "values": ["child", "teen", "adult", "senior"],
    },
    "string": { "type": "boolean" },
    "american": { "type": "boolean" },
  },
}, {
  "name": "cf",
  "description":
    "Generate a random Italian social security number (Codice Fiscale)",
  "properties": {
    "first": { "type": "string" },
    "last": { "type": "string" },
    "gender": { "type": "string", "values": ["Female", "Male"] },
    "birthday": { "type": "string" },
    "city": { "type": "string" },
  },
}, {
  "name": "cpf",
  "description": "Generate a random Brazilian tax id",
  "properties": {},
}, {
  "name": "first",
  "description": "Generate a random first name",
  "properties": {
    "nationality": { "type": "string", "values": ["en", "it"] },
    "gender": { "type": "string", "values": ["female", "male"] },
  },
}, {
  "name": "gender",
  "description": "Generate a random gender",
  "properties": { "extraGenders": { "type": "list" } },
}, {
  "name": "last",
  "description": "Generate a random last name",
  "properties": {
    "nationality": {
      "type": "string",
      "values": ["en", "it", "nl", "uk", "de", "jp", "es", "fr"],
    },
  },
}, {
  "name": "name",
  "description": "Generate a random name",
  "properties": {
    "middle": { "type": "boolean" },
    "middle_initial": { "type": "boolean" },
    "prefix": { "type": "boolean" },
    "nationality": { "type": "string", "values": ["en", "it"] },
  },
}, {
  "name": "prefix",
  "description": "Generate a random name prefix",
  "properties": {
    "full": { "type": "boolean" },
    "gender": { "type": "string", "values": ["male", "female", "all"] },
  },
}, {
  "name": "ssn",
  "description": "Generate a random social security number",
  "properties": {
    "ssnFour": { "type": "boolean" },
    "dashes": { "type": "boolean" },
  },
}, {
  "name": "suffix",
  "description": "Generate a random name suffix",
  "properties": { "full": { "type": "boolean" } },
}, {
  "name": "animal",
  "description": "Generate a random animal",
  "properties": {
    "type": {
      "type": "string",
      "values": [
        "ocean",
        "desert",
        "grassland",
        "forest",
        "farm",
        "pet",
        "zoo",
      ],
    },
  },
}, {
  "name": "android_id",
  "description": "Return a random GCM registration ID",
  "properties": {},
}, {
  "name": "apple_token",
  "description": "Return a random GCM registration ID",
  "properties": {},
}, {
  "name": "bb_pin",
  "description": "Return a random BlackBerry Device PIN",
  "properties": {},
}, {
  "name": "wp7_anid",
  "description": "Return a random Windows Phone 7 ANID",
  "properties": {},
}, {
  "name": "wp8_anid2",
  "description": "Return a random Windows Phone 8 ANID2",
  "properties": {},
}, {
  "name": "avatar",
  "description": "Return a URL to a random avatar from Gravatar",
  "properties": {
    "protocol": { "type": "string", "values": ["http", "https"] },
    "fileExtension": { "type": "string", "values": ["jpg", "png"] },
    "email": { "type": "string" },
  },
}, {
  "name": "color",
  "description": "Return a random color",
  "properties": {
    "format": { "type": "string", "values": ["hex", "shorthex", "rgb", "0x"] },
    "casing": { "type": "string", "values": ["upper", "lower"] },
    "grayscale": { "type": "boolean" },
  },
}, {
  "name": "company",
  "description": "Return a random company name",
  "properties": {},
}, {
  "name": "domain",
  "description": "Return a random domain with a random tld",
  "properties": { "tld": { "type": "string" } },
}, {
  "name": "email",
  "description": "Return a random email with a random domain",
  "properties": { "domain": { "type": "string" } },
}, {
  "name": "fbid",
  "description": "Return a random Facebook id, aka fbid",
  "properties": {},
}, {
  "name": "google_analytics",
  "description":
    'Return a random Google Analytics tracking code. Takes the form "UA-123456-01"',
  "properties": {},
}, {
  "name": "hashtag",
  "description":
    'Return a random hashtag. This is a string of the form "#thisisahashtag"',
  "properties": {},
}, {
  "name": "ip",
  "description": "Return a random IP Address",
  "properties": {},
}, {
  "name": "ipv6",
  "description": "Return a random IPv6 Address",
  "properties": {},
}, {
  "name": "klout",
  "description": "Return a random Klout score. Range 1-99",
  "properties": {},
}, {
  "name": "profession",
  "description": "Return a random profession. Rank is false by default",
  "properties": { "rank": { "type": "boolean" } },
}, {
  "name": "tld",
  "description":
    "Return a random tld (Top Level Domain) from the set: ['com', 'org', 'edu', 'gov', 'uk', 'net', 'io']",
  "properties": {},
}, {
  "name": "twitter",
  "description": "Return a random twitter handle",
  "properties": {},
}, {
  "name": "url",
  "description": "Return a random twitter handle",
  "properties": {
    "protocol": { "type": "string" },
    "domain": { "type": "string" },
    "domain_prefix": { "type": "string" },
    "path": { "type": "string" },
    "extensions": { "type": "list" },
  },
}, {
  "name": "address",
  "description": "Generate a random street address",
  "properties": { "short_suffix": { "type": "boolean" } },
}, {
  "name": "altitude",
  "description": "Generate a random altitude, in meters",
  "properties": {
    "fixed": { "type": "integer" },
    "max": { "type": "integer" },
  },
}, {
  "name": "areacode",
  "description": "Generate a random area code",
  "properties": {},
}, {
  "name": "city",
  "description": "Generate a random city name",
  "properties": {},
}, {
  "name": "coordinates",
  "description":
    "Generate random coordinates, which are latitude and longitude, comma separated",
  "properties": { "fixed": { "type": "integer" } },
}, {
  "name": "country",
  "description": "Return a random country",
  "properties": { "full": { "type": "boolean" } },
}, {
  "name": "depth",
  "description":
    "Generate a random depth, in meters. Depths are always negative",
  "properties": {
    "fixed": { "type": "integer" },
    "min": { "type": "integer" },
  },
}, {
  "name": "geohash",
  "description":
    "Generate a random geohash https://en.wikipedia.org/wiki/Geohash",
  "properties": { "length": { "type": "integer" } },
}, {
  "name": "latitude",
  "description": "Generate a random latitude",
  "properties": {
    "fixed": { "type": "integer" },
    "min": { "type": "float" },
    "max": { "type": "float" },
  },
}, {
  "name": "locale",
  "description": "Generate a random ISO-639-1 language code",
  "properties": { "region": { "type": "boolean" } },
}, {
  "name": "longitude",
  "description": "Generate a random longitude",
  "properties": {
    "fixed": { "type": "integer" },
    "min": { "type": "float" },
    "max": { "type": "float" },
  },
}, {
  "name": "phone",
  "description": "Generate a random phone",
  "properties": {
    "formatted": { "type": "boolean" },
    "mobile": { "type": "boolean" },
    "country": { "type": "string", "values": ["us", "uk", "fr"] },
  },
}, {
  "name": "postal",
  "description":
    "Return a Canadian Postal code. Returned postal code is valid with respect to the Postal District (first character) and format only",
  "properties": {},
}, {
  "name": "postcode",
  "description":
    "Generate a random (U.K.) postcode. Returned postcode is valid with respect to the Postcode Area (first characters) and format only",
  "properties": {},
}, {
  "name": "province",
  "description": "Return a random province",
  "properties": {
    "full": { "type": "boolean" },
    "country": { "type": "string", "values": ["ca", "it"] },
  },
}, {
  "name": "state",
  "description": "Return a random state",
  "properties": {
    "full": { "type": "boolean" },
    "territories": { "type": "boolean" },
    "armed_forces": { "type": "boolean" },
    "us_states_and_dc": { "type": "boolean" },
    "country": { "type": "string" },
  },
}, {
  "name": "street",
  "description": "Return a random street",
  "properties": {
    "short_suffix": { "type": "boolean" },
    "syllables": { "type": "integer" },
    "country": { "type": "string", "values": ["us", "it"] },
  },
}, {
  "name": "zip",
  "description": "Generate a random (U.S.) zip code",
  "properties": { "plusfour": { "type": "boolean" } },
}, {
  "name": "ampm",
  "description": "Return am or pm. Very simple",
  "properties": {},
}, {
  "name": "date",
  "description": "Generate a random date",
  "properties": {
    "string": { "type": "boolean" },
    "american": { "type": "boolean" },
    "year": { "type": "integer" },
  },
}, {
  "name": "hammertime",
  "description": "Generate a random hammertime",
  "properties": {},
}, {
  "name": "hour",
  "description": "Generate a random hour",
  "properties": { "twentyfour": { "type": "boolean" } },
}, {
  "name": "millisecond",
  "description": "Generate a random millisecond",
  "properties": {},
}, {
  "name": "minute",
  "description": "Generate a random minute",
  "properties": {},
}, {
  "name": "month",
  "description": "Generate a random month",
  "properties": { "raw": { "type": "boolean" } },
}, {
  "name": "month",
  "description": "Generate a random month",
  "properties": { "raw": { "type": "boolean" } },
}, {
  "name": "second",
  "description": "Generate a random second",
  "properties": {},
}];

export const getNameAt = (i: number): string => texts[i].name;
export const getDescAt = (i: number): string => texts[i].description;
export const get1stPropAt = (i: number): string => {
  const prop = texts[i].properties;
  const propKeys = Object.keys(prop);
  return propKeys[0];
};
